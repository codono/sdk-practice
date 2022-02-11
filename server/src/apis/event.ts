const url = require('url');
const db = require('../utils/db.js');

import helpers from '../utils/helpers';

export const getEvents = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const params = url.parse(req.url, true).query;

  if (!params.year || !params.month) {
    return helpers.sendFailure(req, res, helpers.missingData('year, month'));
  }

  const yearMonth =
    params.year +
    '-' +
    (params.month.length === 1 ? '0' + params.month : params.month);

  const query =
    'SELECT ConferenceEvent.*, Conference.title AS conferenceTitle FROM ' +
    '(SELECT * FROM ConferenceEvent WHERE LEFT(startTime,7) = ? OR LEFT(endTime,7) = ?) AS ConferenceEvent ' +
    'INNER JOIN (SELECT Conference.* FROM Conference ' +
    'INNER JOIN (SELECT conferenceId FROM Participate WHERE userId=?) AS p ON p.conferenceId = Conference.id) ' +
    'AS Conference ON Conference.id = ConferenceEvent.conferenceId';

  const result = await db.query(query, [yearMonth, yearMonth, userId]);

  return res.status(200).send({
    result,
  });
};
