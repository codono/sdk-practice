const url = require('url');
const db = require('../utils/db.js');

import helpers from '../utils/helpers';

export const getLocation = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const confId = req.params.confId;

  const queryLocation =
    'SELECT * FROM ConferenceLocation WHERE conferenceId = ?';
  const location = await db.query(queryLocation, [confId]);

  return res.status(200).send({
    location,
  });
};
