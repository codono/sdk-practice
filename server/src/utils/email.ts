import AWS from 'aws-sdk';
import url from 'url';

interface sendSESEmailProps {
  emailFrom: string;
  emailTo: string;
  subject: string;
  body: string;
  isHtml: boolean;
}

export const sendSesEmail = async function ({
  emailFrom,
  emailTo,
  subject,
  body,
  isHtml,
}: sendSESEmailProps): Promise<any> {
  const SESConfig = {
    apiVersion: '2010-12-01',
    accessKeyId: process.env.S3_ACCESSKEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: process.env.S3_REGION,
  };

  const bodyObj = {
    Text: {
      Data: body,
      Charset: 'utf-8',
    },
    Html: {
      Data: body,
    },
  };
  if (isHtml) delete bodyObj.Text;
  else delete bodyObj.Html;

  const params = {
    Source: emailFrom,
    Destination: {
      ToAddresses: [emailTo],
      CcAddresses: [],
      BccAddresses: [],
    },
    ReplyToAddresses: [emailFrom],
    Message: {
      Body: bodyObj,
      Subject: {
        Data: subject,
        Charset: 'utf-8',
      },
    },
  };

  const ses = new AWS.SES(SESConfig);

  try {
    const result = await ses.sendEmail(params).promise();
    return result;
  } catch (error) {
    return error;
  }
};
