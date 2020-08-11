const { NotificationData } = require("../../db/models");

const getAll = async () => {
  const result = await NotificationData.findAll();
  return result;
};

const get = async (options = {}) => {
  const result = await NotificationData.findOne(options);
  return result;
};

const create = async (record) => {
  const result = await NotificationData.create(record);
  return result;
};

const update = async (record, where = {}) => {
  const result = await NotificationData.update(record, { where });
  return result;
};

module.exports = {
  getAllNotificationData: getAll,
  insertNotificationData: create,
  updateNotificationData: update,
  getNotificationData: get,
};
