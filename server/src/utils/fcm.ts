import { google } from 'googleapis';
import fetch from 'node-fetch';

const key = require('../../config/serviceAccountKey.json');
const FCM_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
const FCM_URI = `https://fcm.googleapis.com/v1/projects/${key.project_id}/messages:send`;

interface Props {
  tokens: string[];
  messageTitle: string;
  messageBody: string;
}

export const firebaseCloudMessaging = async ({
  tokens,
  messageTitle,
  messageBody,
}: Props): Promise<any> => {
  const getAccessToken = async (): Promise<any> => {
    const jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      FCM_SCOPE,
      null,
    );
    return await jwtClient.authorize();
  };

  const { access_token } = await getAccessToken();

  console.log({ tokens });

  const promisedResList = tokens.map(async (token) => {
    const message = {
      message: {
        token,
        notification: {
          title: messageTitle,
          body: messageBody,
        },
        data: {},
        android: {}, // To Android ony
        apns: {}, // To iOS only
      },
    };

    return fetch(FCM_URI, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(message),
    });
  });
  const result = await Promise.all(promisedResList);

  return result.map((res) => {
    return {
      ...res,
      status: res.status,
      statusText: res.statusText,
    };
  });
};
