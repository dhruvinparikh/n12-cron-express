const dapp = require("./dapp");
const notificationdata = require("./notificationdata");
const notifications = require("./notifications");
const users = require("./users");
const usernotifications = require("./usernotifications");

module.exports = {
  ...dapp,
  ...notificationdata,
  ...notifications,
  ...users,
  ...usernotifications
};
