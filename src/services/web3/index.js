const Web3 = require("web3");
const config = require('../../config')

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    `https://mainnet.infura.io/v3/${config.web3.getInfuraKey()}`
  )
);

async function getBlockNumber() {
  const blockNumber = await web3.eth.getBlockNumber();
  return blockNumber;
}

module.exports = { web3, getBlockNumber };
