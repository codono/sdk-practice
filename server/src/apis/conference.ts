const url = require('url');
const db = require('../utils/db.js');

import helpers from '../utils/helpers';

export const getConferences = async (req, res) => {
  const params = url.parse(req.url, true).query;
  const userId = req.user && req.user.id;

  // Comment below line to allow Non-account user to browse the ConfList page
  // if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const queryCommingConf =
    'SELECT Conference.*, Institute.title AS instituteTitle FROM (SELECT Conference.*, bookmark FROM (SELECT * FROM Conference WHERE startDate >= NOW()) AS Conference ' +
    'LEFT JOIN (SELECT *, true AS bookmark FROM ConferenceLike WHERE userId = ?) AS ConferenceLike ON ConferenceLike.conferenceId = Conference.id) AS Conference ' +
    'LEFT JOIN Institute ON Institute.id = Conference.instituteId';
  const commingConf = await db.query(queryCommingConf, [userId]);

  // 지나간 학회 > 날짜로 지나간 학술대회 확인해야함!
  const queryMyConf =
    'SELECT Conference.*, Institute.title AS instituteTitle FROM (SELECT Conference.*, bookmark FROM (SELECT * FROM Conference WHERE endDate < NOW()) AS Conference ' +
    'LEFT JOIN (SELECT *, true AS bookmark FROM ConferenceLike WHERE userId = ?) AS ConferenceLike ON ConferenceLike.conferenceId = Conference.id) AS Conference ' +
    'LEFT JOIN Institute ON Institute.id = Conference.instituteId';
  const myConf = await db.query(queryMyConf, [userId, userId]);

  const queryInterestingConf =
    'SELECT Conference.*, Institute.title AS instituteTitle FROM (SELECT Conference.*, bookmark FROM (SELECT *, true AS bookmark FROM ConferenceLike WHERE userId = ?) AS ConferenceLike ' +
    'LEFT JOIN Conference ON Conference.id = ConferenceLike.conferenceId) AS Conference LEFT JOIN Institute ON Institute.id = Conference.instituteId';
  const interestingConf = await db.query(queryInterestingConf, [userId]);

  return res.status(200).send({
    commingConf: commingConf,
    myConf: myConf,
    interestingConf: interestingConf,
  });
};

export const getConferencesSearch = async (req, res) => {
  const params = url.parse(req.url, true).query;
  const userId = req.user && req.user.id;

  // Comment below line to allow Non-account user to search on the ConfList page
  // if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  let searchStatement = '';
  if (params.search) {
    searchStatement = ` WHERE Conference.title LIKE '%${params.search}%' OR Institute.title LIKE '%${params.search}%'`;
  }

  const queryConf =
    'SELECT Conference.*, Institute.title AS instituteTitle FROM (SELECT Conference.*, bookmark FROM Conference ' +
    'LEFT JOIN (SELECT *, true AS bookmark FROM ConferenceLike WHERE userId = ?) AS ConferenceLike ON ConferenceLike.conferenceId = Conference.id) AS Conference ' +
    'LEFT JOIN Institute ON Institute.id = Conference.instituteId' +
    searchStatement;
  const searchConf = await db.query(queryConf, [userId]);

  return res.status(200).send({
    searchConf,
  });
};

export const getConfInfo = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const confId = req.params.confId;

  const queryConf =
    'SELECT Conference.*, Institute.title AS instituteTitle, Institute.address AS instituteAddress FROM (SELECT * FROM Conference WHERE id = ?) AS Conference ' +
    'LEFT JOIN Institute On Institute.id = Conference.instituteId';
  let conf = await db.query(queryConf, [confId]);
  conf = conf[0];

  const queryCommittee =
    'SELECT Committee.* FROM (SELECT * FROM Committee WHERE conferenceId = ?) AS Committee LEFT JOIN User ON User.id = Committee.userId';
  const committee = await db.query(queryCommittee, [confId]);

  conf.committee = {};

  for (const i in committee) {
    if (!conf.committee[committee[i].role]) {
      conf.committee[committee[i].role] = [];
    }
    conf.committee[committee[i].role].push(committee[i]);
  }

  const queryCategory = 'SELECT * FROM Category WHERE conferenceId = ?';
  const category = await db.query(queryCategory, [confId]);
  conf.category = category;

  const queryConfEvent =
    'SELECT * FROM ConferenceEvent WHERE conferenceId = ? ORDER BY ISNULL(startTime), startTime, ISNULL(endTime), endTime';
  const confEvent = await db.query(queryConfEvent, [confId]);
  conf.event = confEvent;

  const querySponsor =
    'SELECT Sponsor.* FROM (SELECT * FROM Sponsored WHERE conferenceId = ?) AS Sponsored LEFT JOIN Sponsor ON Sponsor.id = Sponsored.sponsorId';
  const confSponsor = await db.query(querySponsor, [confId]);
  conf.sponsor = confSponsor;

  const queryParticipate =
    'SELECT * FROM Participate WHERE conferenceId = ? AND userId = ?';
  let participate = await db.query(queryParticipate, [confId, userId]);
  participate = participate[0];

  if (participate) {
    conf.participate = true;
  } else {
    conf.participate = false;
  }

  const queryBookmark =
    'SELECT * FROM ConferenceLike WHERE conferenceId = ? AND userId = ?';
  let bookmark = await db.query(queryBookmark, [confId, userId]);
  bookmark = bookmark[0];

  if (bookmark) {
    conf.bookmark = true;
  } else {
    conf.bookmark = false;
  }

  return res.status(200).send({
    conf,
  });
};

export const getProgram = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const confId = req.params.confId;

  const queryTracks = 'SELECT * FROM Track WHERE conferenceId = ?';
  const tracks = await db.query(queryTracks, [confId]);

  const querySessions = 'SELECT * FROM Session WHERE trackId = ?';
  const queryPresentaions =
    'SELECT * FROM Presentation WHERE sessionId = ? ORDER BY ISNULL(startTime), startTime, ISNULL(endTime), endTime';

  for (const i in tracks) {
    const t = tracks[i];
    const sessions = await db.query(querySessions, [t.id]);
    t.sessions = sessions;
    for (const j in sessions) {
      const s = sessions[j];
      const presentations = await db.query(queryPresentaions, [s.id]);
      s.presentations = presentations;
    }
  }

  return res.status(200).send({
    tracks,
  });
};

export const getPresentation = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const presentationId = req.params.presentationId;

  const queryPresentation = 'SELECT * FROM Presentation WHERE id = ?';
  const presentation = (await db.query(queryPresentation, [presentationId]))[0];

  return res.status(200).send({
    presentation,
  });
};

export const toggleBookmarkConference = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  if (!req.body.data)
    return helpers.sendFailure(req, res, helpers.missingData('data'));

  const confId = req.params.confId;
  if (!confId)
    return helpers.sendFailure(req, res, helpers.missingData('confId'));

  const data = req.body.data;
  const bookmarkBoolean = data.bookmark;

  try {
    if (bookmarkBoolean) {
      const query =
        'INSERT INTO ConferenceLike SET userId = ?, conferenceId = ?';
      const result = await db.query(query, [userId, confId]);

      return res.status(200).send({
        result,
      });
    } else {
      const query =
        'DELETE FROM ConferenceLike WHERE userId = ? AND conferenceId = ?';
      const result = await db.query(query, [userId, confId]);

      return res.status(200).send({
        result,
      });
    }
  } catch (err) {
    return res.status(500).send({
      error: 'InternalServerError',
      message: 'The error occurred during the toggleBookmarkConference process',
    });
  }
};
