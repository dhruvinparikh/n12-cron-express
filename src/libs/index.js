// all the notfications
const MakerDao = require("./makerdao/n12");
const UniSwapV2 = require("./uniswap/n12");

module.exports = {
  ...MakerDao,
  ...UniSwapV2
};
