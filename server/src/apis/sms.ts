import helpers from '../utils/helpers';
import { sendLMS } from '../utils/sms';

const url = require('url');
const db = require('../utils/db.js');

const APP_STORE = process.env.APP_STORE;
const PLAY_STORE = process.env.PLAY_STORE;

export const sendDownloadUrl = async (req, res) => {
  const b = req.body;
  const receiver = b.receiver;

  if (!receiver) {
    return helpers.sendFailure(req, res, helpers.missingData('receiver'));
  }

  const subject = '[아리스, 내 손안의 학술대회]';
  const content = `앱 다운로드 주소를 클릭하시면 아리스를 다운로드 받을 수 있습니다.\n안드로이드: \n${PLAY_STORE}\niOS: \n${APP_STORE}`;

  // 10분 당 최대 3회 전송 > 하루 3회로
  const querySelect =
    'SELECT * FROM SmsUrl WHERE receiver = ? AND DATE(createdAt) = DATE(NOW())';
  const count = await db.query(querySelect, [receiver]);
  if (count.length >= 3) {
    return res.status(400).send({
      error: 'exceedSmsCount',
      message: 'exceed sending sms count',
    });
  }
  // SmsUrl insert & 문자 전송
  const queryInsert = 'INSERT INTO SmsUrl SET receiver = ?';
  const sms = await db.query(queryInsert, [receiver]);
  const smsId = sms.insertId;

  const sendResult: any = await sendLMS(receiver, subject, content);

  if (sendResult.statusCode == 202) {
    const queryUpdate =
      'UPDATE SmsUrl SET messageId = ?, messages = ? WHERE id=?';
    const sms = await db.query(queryUpdate, [
      sendResult.body.messages[0].messageId,
      JSON.stringify(sendResult.body.messages),
      smsId,
    ]);
    return res.status(200).send({
      msg: 'ok',
    });
  } else {
    return res.status(400).send({
      error: 'sendSmsError',
      message: sendResult.body.message,
    });
  }
};
