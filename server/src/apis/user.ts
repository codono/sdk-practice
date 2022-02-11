const url = require('url');

//import db from './utils/db.js';
const db = require('../utils/db.js');
import helpers from '../utils/helpers';

export const getUsers = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const { userIds } = req.body.data;

  // let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // if (ip.substr(0, 7) == '::ffff:') {
  //   ip = ip.substr(7);
  // }

  // if(ip !== "221.163.163.51") {
  //   return; helpers.sendSuccess(req, res, {users: [], totalCount: 0});
  // }

  const query = 'SELECT * FROM User where id in ?';
  const result = await db.query(query, [userIds]);

  return res.status(200).send({
    users: result,
  });
};

export const getUser = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const id = req.params.userId;

  const query = 'SELECT * FROM User WHERE id = ?';
  const result = (await db.query(query, [id]))[0];

  if (!result) {
    return helpers.sendFailure(req, res, helpers.noSuchRow('user'));
  }

  return res.status(200).send({
    user: result,
  });
};

export const getUserMe = async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    return res.status(400).send({
      error: 'notLoggedIn',
      message: 'This user is not logged in!',
    });
  }

  const result = await db.query('SELECT * from User WHERE id=?', [userId]);
  const user = result?.length ? result[0] : null;
  return res.status(200).send({
    user,
  });
};

export const updateUserMe = async (req, res) => {
  const userId = req.user?.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const { ...formData } = req.body.data;
  let result;

  try {
    const query = 'UPDATE User SET ? WHERE id = ?';
    result = await db.query(query, [{ ...formData }, userId]);
  } catch (err) {
    return res.status(500).send({
      error: 'InternalServerError',
      message: 'The error occurred during the sign up process',
    });
  }

  return res.status(200).send({
    result,
  });
};
