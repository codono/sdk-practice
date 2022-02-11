const url = require('url');

//import db from './utils/db.js';
const db = require('../utils/db.js');

import { sign } from 'jsonwebtoken';

import {
  encryptCredential,
  validateCredential,
  verifyAccessToken,
} from '../utils/auth';
import { sendSlack } from '../utils/slack';

const JWT_SECRET = process.env.JWT_SECRET;

export const signUp = async (req, res) => {
  const { email, password, ...formData } = req.body.data;

  const userWithEmail = (
    await db.query('SELECT * FROM User WHERE email=?', [email])
  )[0];
  if (userWithEmail) {
    return res.status(400).send({
      error: 'takenEmail',
      message: 'Email is already taken',
    });
  }

  let createdUser;
  const hashedPassword = await encryptCredential(password);
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (ip.substr(0, 7) === '::ffff:') {
    ip = ip.substr(7);
  }

  try {
    createdUser = await db.query('INSERT INTO User SET ?', [
      {
        email,
        password: hashedPassword,
        ip,
        userAgent: req.headers['user-agent'],
        lastSignedIn: new Date(),
        ...formData,
      },
    ]);
  } catch (err) {
    return res.status(500).send({
      error: 'InternalServerError',
      message: 'The error occurred during the sign up process',
    });
  }

  return res.status(200).send({
    user: createdUser,
  });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = (
    await db.query('SELECT * FROM User WHERE email=? AND deletedAt IS NULL', [
      email,
    ])
  )[0];
  if (!user) {
    return res.status(400).send({
      error: 'wrongEmailOrPassword',
      message: 'Email or Password Incorrect',
    });
  }

  const isPasswordValid = await validateCredential(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).send({
      error: 'wrongEmailOrPassword',
      message: 'Email or Password Incorrect',
    });
  }

  // if (!user.verified) {
  //   return res.status(400).send({
  //     error: 'notVerified',
  //     message: 'User is not verified',
  //   });
  // }

  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (ip.substr(0, 7) === '::ffff:') {
    ip = ip.substr(7);
  }

  const token = sign({ id: user.id }, JWT_SECRET, {
    expiresIn: '7d',
  });
  delete user.password;

  res.cookie('accessToken', token, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    signed: true, // 'signed' option needs secret key which is given in 'cookieParser' middleware
  });
  res.status(200).send({
    auth: true,
    token: token,
    message: 'User found & Logged in',
    user: user,
  });
};

export const authenticateJWT = async (req, res, next) => {
  const validated: any = await verifyAccessToken(req);

  if (!validated?.id) return next(); // accessToken is incorrect

  const userResult = await db.query(
    'SELECT id, email, name, ip, userAgent, verified, lastSignedIn, createdAt, deletedAt FROM User WHERE id=?',
    [validated.id],
  );
  if (userResult) {
    req.user = userResult[0];
  }
  next();
};

export const mobileSignIn = async (req, res) => {
  const userId = req.user && req.user.id;

  //already logged-in? just renew the token
  if (userId) {
    const user = (await db.query('SELECT * FROM User WHERE id=?', [userId]))[0];
    delete user.password;

    const token = sign({ id: user.id }, JWT_SECRET, {
      expiresIn: '7d',
    });
    delete user.password;

    res.cookie('accessToken', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      signed: true, // 'signed' option needs secret key which is given in 'cookieParser' middleware
    });

    return res.status(200).send({
      auth: true,
      token: token,
      message: 'User found & Already Logged in',
      user: user,
    });
  }

  const firebaseId = req.body.uid;
  let { email, providerData, version } = req.body;
  if (Array.isArray(providerData)) providerData = providerData[0];

  if (!firebaseId || !email || !providerData)
    return res.status(400).send({
      error: 'missindData',
      message: 'uid||email||provider is missing!',
    });

  // if uid & email pair exists, consider it login
  let user = (await db.query('SELECT * FROM User WHERE email=?', [email]))[0];
  // Authentication via (firebaseId(uid), email) pair fail?
  if (user && user.firebaseId != firebaseId)
    return res.status(400).send({
      error: 'invalidFirebaseId',
      message: 'firebaseId is not valid to the user',
    });

  // either way, 1) No user=>Sign UP, 2) User=>just Login

  let message = 'User found & Logged in';
  let updateUser = await db.query(
    'UPDATE User SET lastSignedIn = NOW(), osVersion = ?, appVersion = ? WHERE id = ?',
    [version?.osVersion, version?.appVersion, user.id],
  );

  // No User? Create Account
  if (!user) {
    message = 'User created & Logged in';

    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip.substr(0, 7) === '::ffff:') ip = ip.substr(7);

    const name = providerData.displayName || `User ${email.split('@')[0]}`;
    const nameArr = name.split(' ');
    const familyName = nameArr.splice(-1);
    const firstName = nameArr.join(' ');

    const formDataUser = {
      email,
      contactEmail: email,
      name,
      firstName,
      familyName,
      firebaseId,
      thumbnail: providerData.photoURL,
      phone: providerData.phoneNumber,
      ip,
      userAgent: req.headers['user-agent'],
      lastSignedIn: new Date(),
    };
    if (!formDataUser.thumbnail) delete formDataUser.thumbnail;
    if (!formDataUser.phone) delete formDataUser.phone;

    try {
      const newUser = await db.query('INSERT INTO User SET ?', [
        { ...formDataUser },
      ]);
      const formDataSMA = {
        socialId: providerData.uid,
        authType: providerData.providerId.split('.')[0], // 'google.com' -> 'google'
        userId: newUser.insertId,
      };
      const createdSMA = await db.query(
        'INSERT INTO SocialMediaAccount SET ?',
        [{ ...formDataSMA }],
      );
      // Get just-created user
      const userOBJ = await db.query('SELECT * FROM User WHERE id=?', [
        newUser.insertId,
      ]);
      console.log('userObj:' + JSON.stringify(userOBJ));
      user = userOBJ[0];
      console.log('newUSER:' + JSON.stringify(user));
      sendSlack(`[회원가입] ${user.name} (${user.email})`);
    } catch (err) {
      return res.status(500).send({
        error: 'InternalServerError',
        message: 'The error occurred during the sign up process',
      });
    }
  }

  console.log('end part USER:' + JSON.stringify(user));
  // Now, the server has the user created(signUp) or found(signIn).
  const token = sign({ id: user.id }, JWT_SECRET, {
    expiresIn: '7d',
  });
  delete user.password;

  res.cookie('accessToken', token, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    signed: true, // 'signed' option needs secret key which is given in 'cookieParser' middleware
  });

  return res.status(200).send({
    auth: true,
    token: token,
    message: message || 'User found & Logged in',
    user: user,
  });
};

export const insertFbToken = async (req, res) => {
  res.status(200).send({
    message: 'ok',
  });

  const { firebaseId, token } = req.body;

  // if uid & email pair exists, consider it login
  await db.query('INSERT INTO fbToken SET ?', [{ firebaseId, token }]);
};
