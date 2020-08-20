// here the code of getting pairData from Uniswap will there

// Info @ https://etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f#code

const { ChainId, Token, Fetcher, Route } = require("@uniswap/sdk");
const { tokens } = require("./tokens.json");

async function getPairPrice(tokenA, tokenB) {
  const TOKENA = new Token(
    ChainId.MAINNET,
    tokenA,
    tokens.find(({ address }) => address == tokenA).decimals
  );
  const TOKENB = new Token(
    ChainId.MAINNET,
    tokenB,
    tokens.find(({ address }) => address == tokenB).decimals
  );
  // console.log(TOKENB);
  const pair = await Fetcher.fetchPairData(TOKENA, TOKENB);
  const route = new Route([pair], TOKENB);

  return {
    price: {
      "0": route.midPrice.toSignificant(6),
      "1": route.midPrice.invert().toSignificant(6),
    },
  };
}

module.exports = getPairPrice;
