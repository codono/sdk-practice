const url = require('url');
const db = require('../utils/db.js');

import helpers from '../utils/helpers';

export const getCommittee = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const confId = req.params.confId;

  const queryCommittee =
    'SELECT Committee.* FROM (SELECT * FROM Committee WHERE conferenceId = ?) AS Committee LEFT JOIN User ON User.id = Committee.userId';
  const committee = await db.query(queryCommittee, [confId]);

  return res.status(200).send({
    committee,
  });
};

export const getCommitteeCount = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const confId = req.params.confId;

  const queryCommittee =
    'SELECT role, COUNT(*) AS count FROM Committee WHERE conferenceId = ? GROUP BY role';
  const committee = await db.query(queryCommittee, [confId]);

  return res.status(200).send({
    committee,
  });
};

export const getBookmarkUser = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) return helpers.sendFailure(req, res, helpers.notLoggedIn());

  const confId = req.params.confId;
  if (!confId)
    return helpers.sendFailure(req, res, helpers.missingData('confId'));

  const query =
    'SELECT User.id, email, name, thumbnail FROM User INNER JOIN (SELECT * FROM ConferenceLike WHERE conferenceId = ?) AS ConferenceLike ON ConferenceLike.userId = User.id';
  const users = await db.query(query, [confId]);

  return res.status(200).send({
    users,
  });
};

export const matchUser = async (req, res) => {
  // Login
  const userId = req.user && req.user.id;
  if (!userId) {
    return helpers.sendFailure(req, res, helpers.notLoggedIn());
  }

  // Request data
  const confId = req.params.confId;
  const { inviteCode } = req.body;

  // 초대코드 검증
  // Case 1. 값 존재 여부
  // Case 2. 길이 6
  // Case 3. 숫자 여부
  const regex = new RegExp('^[0-9]{6}$');
  const isInvalidCode = !(inviteCode && regex.test(inviteCode));
  if (isInvalidCode) {
    res.status(400).send({
      error: 'InvalidCode',
      message: `Invalid inviteCode!`,
    });
    return;
  }

  // 초대코드 조회
  const cmt = await db.query(
    'SELECT * FROM Committee WHERE conferenceId=? AND inviteCode=? AND userId IS NULL',
    [confId, inviteCode],
  );

  // Case 4. 위원 존재 여부
  const isEmpty = !cmt || cmt.length === 0;
  if (isEmpty) {
    res.status(400).send({
      error: 'noSuchRow',
      message: `No Committe found to given inviteCode!`,
    });
    return;
  }

  // Case 5. 같은 초대코드를 가진 위원 존재 여부
  const isDuplicated = cmt.length > 1;
  if (isDuplicated) {
    console.log('데이터 중복');
  }

  // 초대코드 활성화
  const result = await db.query('UPDATE Committee SET userId=? WHERE id=?', [
    userId,
    cmt[0].id,
  ]);

  res.status(200).send({ result });
};
