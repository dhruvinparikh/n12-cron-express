const { tokens } = require("./tokens.json");
const { response } = require("express");
const async = require("async");
const fs = require("fs");
const mainnetTokens = tokens.filter((token) => token.chainId == 1);
const { web3 } = require("./services/web3");
const abi = require("./libs/uniswap/n12/uniswapv2.json");
const contractInstance = new web3.eth.Contract(
  abi,
  "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
);

const pairAddressArr = [];

async function fn() {
  await async.mapSeries(mainnetTokens, async (mainnetTokenA) => {
    await async.mapSeries(mainnetTokens, async (mainnetTokenB) => {
      if (mainnetTokenA.symbol != mainnetTokenB.symbol) {
        const res = await contractInstance.methods
          .getPair(mainnetTokenA.address, mainnetTokenB.address)
          .call();
        if (
          res != "0x0000000000000000000000000000000000000000" &&
          web3.utils.isAddress(res)
        ) {
          //   pairAddressArr.push(res);
          fs.writeFileSync(
            `${mainnetTokenA.symbol}-${mainnetTokenB.symbol}`,
            JSON.stringify([mainnetTokenA, mainnetTokenB])
          );
        }
      }
    });
  });
}

fn();
