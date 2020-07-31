const { Notifications } = require("../../db/models");

const getAll = async () => {
  const result = await Notifications.findAll();
  return result;
};

module.exports = { getAllNotifications: getAll };
