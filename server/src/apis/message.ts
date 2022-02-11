import { firebaseCloudMessaging } from '../utils/fcm';
import helpers from '../utils/helpers';

const db = require('../utils/db.js');

export const sendFCMApi = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const { receiverIds, messageTitle, messageBody } = req.body.data;

  const query = 'SELECT id, fcmToken FROM User where id in (?)';
  const users = await db.query(query, [receiverIds]);
  const tokens = users.reduce((result, item) => {
    if (item.fcmToken) result.push(item.fcmToken);
    return result;
  }, []);

  const result = await firebaseCloudMessaging({
    tokens,
    messageTitle,
    messageBody,
  });

  return res.status(200).send({
    message:
      result.length > 1
        ? `${result.length} messages have been sent`
        : `${result.length} message have been sent`,
    result,
  });
};

export const sendFCMModule = async (messageInfo) => {
  const { receiverIds, messageTitle, messageBody } = messageInfo;

  const query = 'SELECT id, fcmToken FROM User where id in (?)';
  const users = await db.query(query, [receiverIds]);
  const tokens = users.reduce((result, item) => {
    if (item.fcmToken) result.push(item.fcmToken);
    return result;
  }, []);

  const result = await firebaseCloudMessaging({
    tokens,
    messageTitle,
    messageBody,
  });

  console.log(
    result.length > 1
      ? `${result.length} messages have been sent`
      : `${result.length} message have been sent`,
  );
  console.log({ result });

  return result;
};
