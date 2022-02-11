const url = require('url');
const db = require('../utils/db.js');

import helpers from '../utils/helpers';

export const getFriends = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const query = 'SELECT * FROM Friends WHERE senderId = ?';
  const friends = await db.query(query, [userId]);

  return res.status(200).send({
    friends,
  });
};
