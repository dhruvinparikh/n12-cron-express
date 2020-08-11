const { Notifications } = require("../../db/models");

const getAll = async (options = {}) => {
  const result = await Notifications.findAll(options);
  return result;
};

const get = async (options = {}) => {
  const result = await Notifications.findOne(options);
  return result;
};

module.exports = { getAllNotifications: getAll, getNotification: get };
