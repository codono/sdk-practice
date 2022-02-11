import Slack from 'slack-node';
const env = process.env.NODE_ENV || 'production';
const webhookUri =
  env == 'local'
    ? 'https://hooks.slack.com/services/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'
    : 'https://hooks.slack.com/services/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';

const channel = env == 'local' ? '#safehome-test' : '#aris-admin';

const slack = new Slack();
slack.setWebhook(webhookUri);

export const sendSlack = (message) => {
  slack.webhook(
    {
      channel: '#' + channel,
      username: 'aris-bot',
      text: message,
    },
    function (err, response) {
      if (err) console.error(err, response);
    },
  );
};
