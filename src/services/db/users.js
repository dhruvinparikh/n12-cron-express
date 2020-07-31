const { User } = require("../../db/models");

const getAll = async () => {
  const result = await User.findAll();
  return result;
};

module.exports = { getAllUsers: getAll };
