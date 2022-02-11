const request = require('request');
const NCLOUD_SMSURI = process.env.NCLOUD_SMSURI;
const NCLOUD_HEADERS_X_NCP_AUTH_KEY = process.env.NCLOUD_HEADERS_X_NCP_AUTH_KEY;
const NCLOUD_HEADERS_X_NCP_SERVICE_SECRET =
  process.env.NCLOUD_HEADERS_X_NCP_SERVICE_SECRET;

export const sendLMS = async (receiver, subject, content) => {
  return new Promise((resolve, reject) => {
    const options = {
      uri: NCLOUD_SMSURI,
      method: 'POST',
      headers: {
        'x-ncp-auth-key': NCLOUD_HEADERS_X_NCP_AUTH_KEY,
        'x-ncp-service-secret': NCLOUD_HEADERS_X_NCP_SERVICE_SECRET,
      },
      body: {
        type: 'LMS',
        contentType: 'COMM',
        countryCode: '82',
        from: '0317110988',
        to: [receiver],
        subject: subject,
        content: content,
      },
      json: true,
    };

    request.post(options, function (err, response, body) {
      if (err) {
        reject(err);
        console.log('sendLMS error: ' + JSON.stringify(err));
      } else {
        resolve(response);
        console.log('message sent successfully.');
      }
    });
  });
};
