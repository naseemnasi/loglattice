const { App } = require("@slack/bolt");
const config = require("../../config/slackbotconfig.json");

// Slack Bot Api
const app = new App({
  token: config.SLACK_BOT_TOKEN,
  signingSecret: config.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: config.APP_TOKEN,
});

const channelId = config.CHANNEL_ID;

async function logAtChannel(text) {
  try {
    let fields = "";

    text.forEach((element) => {
      fields = fields
        .concat(" ")
        .concat(
          `• Task name : ${element.taskName} - Status : ${element.status} - project: ${element.project} - \n`
        );
    });

    const result = await app.client.chat.postMessage({
      channel: channelId,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: text[0]["name"],
            emoji: true,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: fields,
          },
        },
      ],
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { logAtChannel };
