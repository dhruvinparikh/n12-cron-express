const { DApps } = require("../../db/models");

const getAll = async () => {
  const result = await DApps.findAll();
  return result;
};

module.exports = { getAllDApps: getAll };
