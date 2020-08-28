const Mailgun = require("mailgun-js");
const { email } = require("../../config");
const apiKey = email.getMailGunAPIKey();
const domain = email.getMailGunDomain();
const emailFrom = email.getEmailFrom();
const notificationTemplate = email.getNotificationEmailTemplate();
const mailgun = new Mailgun({ apiKey, domain });
const filepath = require("path").join(__dirname, "bx.png");

const createNotificationEmailTemplate = (user, emailContent) => {
  console.log(emailContent);
  const tableData = emailContent["notifications"].map((ele) => {
    return `<tr><td>${ele.dappName}</td><td>${ele.notificationName}</td><td>${ele.result}</td></tr>`;
  });
  const date = new Date();
  const emailText = "Your n12 notifications.";
  const emailData = {
    to: user.email,
    subject: `Daily report for ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
    text: emailText,
    html: `<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> <style> table { border-collapse: collapse; border-spacing: 0; width: 100%; border: 1px solid #ddd; } th, td { text-align: left; padding: 8px; } tr:nth-child(even){background-color: #f2f2f2} </style> </head> <body> <div> Hello, Subscriber </div> <div> Here is your daily digest </div> <div style="overflow-x:auto;"> <table> <thead> <tr> <th>DAPP NAME</th> <th>NOTIFICATION NAME</th> <th>RESULT</th> </tr> </thead> <tbody> ${tableData} </tbody> </table> </div> <div style="display:grid;height:100%;margin-top:7px"> <img style="max-width:50%; max-height:100vh; margin: auto;" src="cid:bx.png"> </div> <div style="margin-top : 5px; max-width:50%; max-height:100vh; margin:auto"> BlockX Labs | Unsubscribe </div> </body> </html>`,
    inline: filepath,
  };
  return emailData;
};

const sendEmail = (data) => {
  return new Promise((resolve, reject) => {
    mailgun.messages().send({ ...data, from: emailFrom }, function (error, body) {
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
