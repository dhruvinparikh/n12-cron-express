const { UserNotifications } = require("../../db/models");

const getAll = async (options = {}) => {
  const result = await UserNotifications.findAll(options);
  return result;
};

module.exports = { getAllUserNotifications: getAll };
