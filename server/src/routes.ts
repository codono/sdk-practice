import express from 'express';

import { insertFbToken, login, mobileSignIn, signUp } from './apis/auth';
import {
  getBookmarkUser,
  getCommittee,
  getCommitteeCount,
  matchUser,
} from './apis/committee';
import {
  getConferences,
  getConferencesSearch,
  getConfInfo,
  getPresentation,
  getProgram,
  toggleBookmarkConference,
} from './apis/conference';
import { getEvents } from './apis/event';
import { getFriends } from './apis/friend';
import { getLocation } from './apis/location';
import { sendFCMApi } from './apis/message';
import { getNews, getNewsUnreadUser, postNews, readNews } from './apis/news';
import { sendDownloadUrl } from './apis/sms';
import { getUserMe, getUsers, updateUserMe } from './apis/user';
import { postWishConference } from './apis/wishConference';

const router = express.Router();

// auth
router.post('/api/signup', signUp);
router.post('/api/login', login);
router.get('/api/logout', function (req, res) {
  res.clearCookie('accessToken');
  res.status(200).send({
    auth: false,
    message: 'user logged out',
  });
});

// auth - movile app
router.post('/api/mobileSignIn', mobileSignIn);
router.post('/api/fbToken', insertFbToken);

// user
router.get('/api/user', getUsers);
// router.get('/api/user/:userId', getUser);
router.get('/api/user/me', getUserMe);
// router.put('/api/user/:userId', updateUser);
router.put('/api/user/me', updateUserMe);

// conference
router.get('/api/confInMain', getConferences);
router.get('/api/confInMainSearch', getConferencesSearch);
router.get('/api/conf/:confId', getConfInfo);
router.get('/api/conf/:confId/program', getProgram);
router.get('/api/presentation/:presentationId', getPresentation);
router.put('/api/conf/:confId/bookmark', toggleBookmarkConference);

// committee
router.get('/api/conf/:confId/committee', getCommittee);
router.get('/api/conf/:confId/committeeCount', getCommitteeCount);
router.get('/api/conf/:confId/bookmarkUser', getBookmarkUser);
router.put('/api/conf/:confId/inviteCode', matchUser);

// location
router.get('/api/conf/:confId/location', getLocation);

// news
router.get('/api/conf/:confId/news', getNews);
router.post('/api/conf/:confId/news', postNews);
router.put('/api/news/:newsId/read', readNews);
router.get('/api/news/:newsId/unread', getNewsUnreadUser);

// event
router.get('/api/event', getEvents);

// friend
router.get('/api/friend', getFriends);

// FCM(Firebase Cloud Messaging)
router.post('/api/message/user', sendFCMApi);

// WishConference
router.post('/api/conf/wish', postWishConference);

// send message (app download url)
router.post('/api/sendDownloadUrl', sendDownloadUrl);

export default router;
