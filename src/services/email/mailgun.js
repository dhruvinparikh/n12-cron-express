const Mailgun = require("mailgun-js");
const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const emailFrom = process.env.MAILGUN_FROM;
const mailgun = new Mailgun({ apiKey, domain });

const sendEmail = (data, userConfig) => {
  const mailgunInstance = userConfig
    ? new Mailgun({ apiKey: userConfig.apiKey, domain: userConfig.domain })
    : mailgun;

  return new Promise((resolve, reject) => {
    mailgunInstance
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
  createConfirmEmailData,
};
