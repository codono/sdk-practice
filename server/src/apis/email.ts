const url = require('url');
const db = require('../utils/db.js');
const { sendSesEmail } = require('../utils/email');

export const sendCustomEmail = async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    return res.status(400).send({
      error: 'notLoggedIn',
      message: 'This user is not logged in!',
    });
  }

  const { userList, content } = req.body.data;

  return res.status(200).send({
    msg: 'email sent success!',
  });
};

export const sendEmail = async (req, res) => {
  //   const userId = req.user?.id;
  //   if (!userId) {
  //     return res.status(400).send({
  //       error: 'notLoggedIn',
  //       message: 'This user is not logged in!',
  //     });
  //   }

  const { userList, subject, content, isHtml } = req.body;

  console.log('userList:' + JSON.stringify(userList));

  const contentBody = {
    Html: { Data: content },
    Text: { Data: content, Charset: 'UTF-8' },
  };
  if (isHtml) delete contentBody.Text;
  else delete contentBody.Html;

  userList.forEach((item, idx) => {
    setTimeout(async () => {
      console.log(
        'email is being sent...' +
          JSON.stringify({
            emailTo: item.email,
            subject: subject || '안내 메일',
            body: contentBody,
          }),
      );
      const result = await sendSesEmail({
        emailFrom: 'Sendia <hello@sendia.io>',
        emailTo: item.email,
        subject: subject || '안내 메일',
        body: content,
        isHtml: isHtml,
      });
      console.log('result:' + JSON.stringify(result));
    }, idx * 1000);
  });

  return res.status(200).send({
    msg: `email will be sent in about ${userList.length + 1} seconds`,
  });
};
