// here the code of getting pairData from Uniswap will there

// Info @ https://etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f#code

const { ChainId, Token, WETH, Fetcher, Route } = require("@uniswap/sdk");
const config = require("./config");
const WBTC_ADDRESS = config.getWBTCAddress();

// Returns WBTC <> WETH price on uniswap exchange
async function getUniswapV2PairData(options = {}) {
  // TODO Dhruvin: Figure out the math behind swap rate
  //   const { pack, keccak256 } = require("@ethersproject/solidity");
  // const { getCreate2Address } = require("@ethersproject/address");
  // const { web3 } = require("../../../services/web3");
  // const uniswapV2abi = require("./uniswapv2.json");
  // const uniswapV2Pairabi = require("./uniswapv2pair.json");
  // const contractAddress = config.getUniswapV2FactoryAdress();
  // const INIT_CODE_HASH = config.getUniswapV2FactoryInitCodeHash();
  // const WBTC2WETHPairAddress = getCreate2Address(
  //   contractAddress,
  //   keccak256(
  //     ["bytes"],
  //     [
  //       pack(
  //         ["address", "address"],
  //         [process.env.WBTC_ADDRESS, process.env.WETH_ADDRESS]
  //       ),
  //     ]
  //   ),
  //   INIT_CODE_HASH
  // );
  // const WBTC2WETHPairInstance = new web3.eth.Contract(
  //   uniswapV2Pairabi,
  //   WBTC2WETHPairAddress
  // );
  // const result = await WBTC2WETHPairInstance.methods
  //   .getReserves()
  //   .call(options);

  const WBTC = new Token(ChainId.MAINNET, WBTC_ADDRESS, 18);

  // note that you may want/need to handle this async code differently,
  // for example if top-level await is not an option
  const pair = await Fetcher.fetchPairData(WBTC, WETH[WBTC.chainId]);

  const route = new Route([pair], WETH[WBTC.chainId]);

  return {
    price: {
      "0": route.midPrice.toSignificant(6),
      "1": route.midPrice.invert().toSignificant(6),
    },
  };
}

module.exports = { getUniswapV2PairData };
