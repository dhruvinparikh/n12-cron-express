// all the notification scripts in makerdao
const { getTotalDAISupply } = require("./dai");

module.exports = {
  "00000001-2c32-4564-8d54-e00d4001b744": getTotalDAISupply,
};
