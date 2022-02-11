const url = require('url');
const db = require('../utils/db.js');

import helpers from '../utils/helpers';
import { sendFCMModule } from './message';

export const getNews = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const confId = req.params.confId;

  const queryConferenceAdmin = 'SELECT * FROM Conference WHERE id = ?';
  const conference = await db.query(queryConferenceAdmin, [confId]);

  let news;
  if (conference[0].userId === userId) {
    console.log('conference admin!!!');
    const queryNews =
      'SELECT News.*, total, `read` FROM (SELECT * FROM News WHERE conferenceId = ?) AS News ' +
      'LEFT JOIN (SELECT newsId, COUNT(*) AS total, SUM(`read`) AS `read` FROM NewsAction GROUP BY newsId) AS NewsAction ON NewsAction.newsId = News.id ORDER BY createdAt DESC';
    news = await db.query(queryNews, [confId]);
  } else {
    const queryNews =
      'SELECT PrivateNews.*, `read` FROM (SELECT * FROM News WHERE isPublic!=TRUE AND conferenceId = ?) AS PrivateNews ' +
      'INNER JOIN (SELECT * FROM NewsAction WHERE receiverId = ?) AS PrivateNewsAction ' +
      'ON PrivateNewsAction.newsId = PrivateNews.id ' +
      'UNION ' +
      'SELECT PublicNews.*, `read` FROM (SELECT * FROM News WHERE isPublic=TRUE AND conferenceId = ?) AS PublicNews ' +
      'LEFT JOIN (SELECT * FROM NewsAction WHERE receiverId = ?) AS PublicNewsAction ' +
      'ON PublicNewsAction.newsId = PublicNews.id ORDER BY createdAt DESC';

    news = await db.query(queryNews, [confId, userId, confId, userId]);
  }
  return res.status(200).send({
    news,
  });
};

export const postNews = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const confId = req.params.confId;
  const { readerGroup, ...formData } = req.body;
  let createdNews, news;

  const queryConferenceAdmin = 'SELECT * FROM Conference WHERE id = ?';
  const conference = await db.query(queryConferenceAdmin, [confId]);

  if (readerGroup.length > 0) {
    const receiverIds = [];
    formData.isPublic = 0;
    for (const i in readerGroup) {
      receiverIds.push(readerGroup[i].id);
    }
    formData.readerGroup = receiverIds.join();
  } else {
    formData.isPublic = 1;
  }

  try {
    const queryNews = 'INSERT INTO News SET ?';
    createdNews = await db.query(queryNews, [
      {
        userId: userId,
        conferenceId: confId,
        ...formData,
      },
    ]);

    if (readerGroup.length > 0) {
      formData.readerGroup = formData.readerGroup.split(',');
      const queryCommittee = 'SELECT id FROM User WHERE id IN (?)';
      const committee = await db.query(queryCommittee, [formData.readerGroup]);

      for (const i in committee) {
        const c = committee[i];
        if (c.id) {
          sendFCMModule({
            receiverIds: c.id,
            messageTitle: conference[0].title, //학술대회 제목
            messageBody: formData.title, //공지 제목
          });
          const queryAction = 'INSERT INTO NewsAction SET ?';
          const action = await db.query(queryAction, [
            {
              newsId: createdNews.insertId,
              senderId: userId,
              receiverId: c.id,
            },
          ]);
        }
      }
    } else {
      // 전체공개 게시글일 경우, 해당 컨퍼런스 북마크 한 사람에게 노티 알림(기록 X)
      const queryBookmark =
        'SELECT userId FROM ConferenceLike WHERE conferenceId = ?';
      const bookmarkUsers = await db.query(queryBookmark, [confId]);
      const receiverIds = bookmarkUsers.reduce((result, item) => {
        if (item.userId) result.push(item.userId);
        return result;
      }, []);
      sendFCMModule({
        receiverIds: receiverIds,
        messageTitle: conference[0].title, //학술대회 제목
        messageBody: formData.title, //공지 제목
      });
    }

    if (conference[0].userId === userId) {
      console.log('conference admin!!!');
      const queryNews =
        'SELECT News.*, total, `read` FROM (SELECT * FROM News WHERE conferenceId = ?) AS News ' +
        'LEFT JOIN (SELECT newsId, COUNT(*) AS total, SUM(`read`) AS `read` FROM NewsAction GROUP BY newsId) AS NewsAction ON NewsAction.newsId = News.id ORDER BY createdAt DESC';
      news = await db.query(queryNews, [confId]);
    } else {
      const queryNews =
        'SELECT PrivateNews.*, `read` FROM (SELECT * FROM News WHERE isPublic!=TRUE AND conferenceId = ?) AS PrivateNews ' +
        'INNER JOIN (SELECT * FROM NewsAction WHERE receiverId = ?) AS PrivateNewsAction ' +
        'ON PrivateNewsAction.newsId = PrivateNews.id ' +
        'UNION ' +
        'SELECT PublicNews.*, `read` FROM (SELECT * FROM News WHERE isPublic=TRUE AND conferenceId = ?) AS PublicNews ' +
        'LEFT JOIN (SELECT * FROM NewsAction WHERE receiverId = ?) AS PublicNewsAction ' +
        'ON PublicNewsAction.newsId = PublicNews.id ORDER BY createdAt DESC';

      news = await db.query(queryNews, [confId, userId, confId, userId]);
    }
  } catch (err) {
    return res.status(500).send({
      error: 'InternalServerError',
      message: 'The error occurred during the sign up process',
    });
  }

  return res.status(200).send({
    news,
  });
};

export const readNews = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const newsId = req.params.newsId;

  const queryNews =
    'UPDATE NewsAction SET `read` = true, readAt = Now() WHERE newsId = ? AND receiverId = ?';
  let news = await db.query(queryNews, [newsId, userId]);

  if (news?.affectedRows == 0) {
    const insertQuery = 'INSERT INTO NewsAction SET ?';
    news = await db.query(insertQuery, [
      {
        read: true,
        newsId,
        receiverId: userId,
        senderId: 0,
        readAt: new Date(),
      },
    ]);
  }

  return res.status(200).send({
    news,
  });
};

export const getNewsUnreadUser = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const newsId = req.params.newsId;

  const query =
    'SELECT NewsAction.*, name, email, thumbnail FROM (SELECT * FROM NewsAction WHERE newsId = ? AND `read` = 0) AS NewsAction LEFT JOIN User ON User.id = NewsAction.receiverId';
  const unreadUser = await db.query(query, [newsId]);

  return res.status(200).send({
    unreadUser,
  });
};
