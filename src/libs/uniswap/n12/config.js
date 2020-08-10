require("dotenv").config();
const convict = require("convict");

const uniswapSchema = convict({
  uniswapV2FactoryAdress: {
    doc: "Uniswap V2 factory address",
    format: "String",
    default: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    env: "UNISWAP_V2_ADDRESS",
  },
  uniswapV2FactoryInitCodeHash: {
    doc: "Uniswap V2 factory init code hash",
    format: "String",
    default:
      "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",
    env: "UNISWAP_V2_FACTORY_INIT_CODE_HASH",
  },
  wethAddress: {
    doc: "WETH token contract address on mainnet",
    format: "String",
    default: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    env: "WETH_ADDRESS",
  },
  wbtcAddress: {
    doc: "WBTC token contract address on mainnet",
    format: "String",
    default: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    env: "WBTC_ADDRESS",
  },
});

const getUniswapV2FactoryAdress = () => {
  try {
    const result = uniswapSchema.get("uniswapV2FactoryAdress");
    return result;
  } catch (error) {
    throw Error("Missing uniswapV2FactoryAdress");
  }
};

const getUniswapV2FactoryInitCodeHash = () => {
  try {
    const result = uniswapSchema.get("uniswapV2FactoryInitCodeHash");
    return result;
  } catch (error) {
    throw Error("Missing uniswapV2FactoryInitCodeHash");
  }
};

const getWETHAddress = () => {
  try {
    const result = uniswapSchema.get("wethAddress");
    return result;
  } catch (error) {
    throw Error("Missing wethAddress");
  }
};

const getWBTCAddress = () => {
  try {
    const result = uniswapSchema.get("wbtcAddress");
    return result;
  } catch (error) {
    throw Error("Missing wbtcAddress");
  }
};

uniswapSchema.validate({ allowed: "strict" });

module.exports = {
  ...uniswapSchema,
  getUniswapV2FactoryAdress,
  getUniswapV2FactoryInitCodeHash,
  getWETHAddress,
  getWBTCAddress,
};
