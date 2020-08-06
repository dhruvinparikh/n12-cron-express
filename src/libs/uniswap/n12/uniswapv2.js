// here the code of getting pairData from Uniswap will there

// Info @ https://etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f#code

const { pack, keccak256 } = require("@ethersproject/solidity");
const { getCreate2Address } = require("@ethersproject/address");

const { web3 } = require("../../../services/web3");

const uniswapV2abi = require("./uniswapv2.json");
const uniswapV2Pairabi = require("./uniswapv2pair.json");
const contractAddress = process.env.UNISWAP_V2_ADDRESS;

async function getUniswapV2PairData(options = {}) {
  // const result = await uniSwapV2.methods.getReserves().call(options);
  const WBTC2WETHPairAddress = getCreate2Address(
    contractAddress,
    keccak256(
      ["bytes"],
      [
        pack(
          ["address", "address"],
          [process.env.WBTC_ADDRESS, process.env.WETH_ADDRESS]
        ),
      ]
    ),
    "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f"
  );
  const WBTC2WETHPairInstance = new web3.eth.Contract(
    uniswapV2Pairabi,
    WBTC2WETHPairAddress
  );
  const result = await WBTC2WETHPairInstance.methods.getReserves().call(options);
  // const { ChainId, Token, WETH, Fetcher, Route } = require("@uniswap/sdk");

  // const DAI = new Token(
  //   ChainId.MAINNET,
  //   // "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  //   "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  //   18
  // );

  // // note that you may want/need to handle this async code differently,
  // // for example if top-level await is not an option
  // const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId]);

  // const route = new Route([pair], WETH[DAI.chainId]);

  // console.log(route.midPrice.toSignificant(6)); // 201.306
  // console.log(route.midPrice.invert().toSignificant(6)); // 0.00496756
  return result;
}

module.exports = { getUniswapV2PairData };
