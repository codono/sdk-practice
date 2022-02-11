const url = require('url');
const db = require('../utils/db.js');

import helpers from '../utils/helpers';

export const postWishConference = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const { ...formData } = req.body;
  let createdWishConference;

  try {
    const query = 'INSERT INTO WishConference SET ?';
    createdWishConference = await db.query(query, [
      {
        userId: userId,
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
    createdWishConference,
  });
};
