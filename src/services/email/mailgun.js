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

// TODO DP : Remove after done with reference
// const mailgun = require("mailgun-js");
//   const DOMAIN = "sandboxbcad8842884f4f52b90c8b21556ae5b8.mailgun.org";
//   const mg = mailgun({
//     apiKey: "ec05d3f41c3090636af9d14d4ee2cbcf-f7d0b107-de5fa173",
//     domain: DOMAIN,
//   });
//   const data = {
//     from:
//       "Mailgun Sandbox <postmaster@sandboxbcad8842884f4f52b90c8b21556ae5b8.mailgun.org>",
//     to: "dparikh@blockxlabs.com",
//     subject: "Hello",
//     text: "Testing some Mailgun awesomness!",
//   };
//   mg.messages().send(data, function (error, body) {
//     console.log(body);
//   });
