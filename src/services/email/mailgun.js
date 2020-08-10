const Mailgun = require("mailgun-js");
const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const emailFrom = process.env.MAILGUN_FROM;
const notificationTemplate = process.env.MAILGUN_NOTIFICATION_TEMPLATE;
const mailgun = new Mailgun({ apiKey, domain });

const createNotificationEmailTemplate = (user, emailContent) => {
  const date = new Date();
  // const emailContent = {
  //   notifications: [
  //     {
  //       dappName: "dapp-name",
  //       notificationName: "notification-name",
  //       result: "notification-result",
  //     },
  //   ],
  // };
  const emailText = "Your n12 notifications.";
  const emailData = {
    to: user.email,
    subject: `Daily report for ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
    text: emailText,
    template: notificationTemplate,
    "h:X-Mailgun-Variables": JSON.stringify(emailContent),
  };
  return emailData;
};

const sendEmail = (data) => {
  return new Promise((resolve, reject) => {
    mailgun
      .messages()
      .send({ ...data, from: emailFrom }, function (error, body) {
        if (error) {
          reject(error);
        }
        resolve(body);
      });
  });
};

module.exports = {
  sendEmail,
  createNotificationEmailTemplate,
};
