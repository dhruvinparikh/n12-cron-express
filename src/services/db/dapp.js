const { DApps } = require("../../db/models");

const getAll = async (options = {}) => {
  const result = await DApps.findAll(options);
  return result;
};

const get = async (options = {}) => {
  const result = await DApps.findOne(options);
  return result;
};

module.exports = { getAllDApps: getAll, getDApp: get };
