const convict = require("convict");

const contractSchema = convict({
  MailGunAPIKey: {
    doc: "mailgun api key",
    format: "String",
    default: null,
    env: "MAIL_GUN_API_KEY",
  },
  MailGunDomain: {
    doc: "mailgun domain",
    format: "String",
    default: null,
    env: "MAIL_GUN_DOMAIN",
  },
  NotificationEmailTemplate: {
    doc: "template id of notification email in mailgun",
    format: "String",
    default: "notification_template",
    env: "MAIL_GUN_NOTIFICATION_EMAIL_TEMPLATE",
  },
  EmailFrom: {
    doc: "Email sender name and address",
    format: "String",
    default: null,
    env: "MAIL_GUN_EMAIL_FROM",
  }
});

const getMailGunAPIKey = () => {
  try {
    const result = contractSchema.get("MailGunAPIKey");
    return result;
  } catch (error) {
    throw Error("Missing APIKey");
  }
};

const getMailGunDomain = () => {
  try {
    const result = contractSchema.get("MailGunDomain");
    return result;
  } catch (error) {
    throw Error("Missing domain");
  }
};

const getNotificationEmailTemplate = () => {
  try {
    const result = contractSchema.get("NotificationEmailTemplate");
    return result;
  } catch (error) {
    throw Error("Missing NotificationEmailTemplate");
  }
};

const getEmailFrom = () => {
  try {
    const result = contractSchema.get("EmailFrom");
    return result;
  } catch (error) {
    throw Error("Missing EmailFrom");
  }
};

module.exports = {
  ...contractSchema,
  getMailGunAPIKey,
  getMailGunDomain,
  getEmailFrom,
  getNotificationEmailTemplate,
};
