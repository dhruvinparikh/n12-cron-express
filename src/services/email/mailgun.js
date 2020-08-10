const Mailgun = require("mailgun-js");
const { email } = require("../../config");
const apiKey = email.getMailGunAPIKey();
const domain = email.getMailGunDomain();
const emailFrom = email.getEmailFrom();
const notificationTemplate = email.getNotificationEmailTemplate();
const mailgun = new Mailgun({ apiKey, domain });

const createNotificationEmailTemplate = (user, emailContent) => {
  const date = new Date();
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
