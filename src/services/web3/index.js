const Web3 = require("web3");
const config = require('../../config')

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    `https://mainnet.infura.io/v3/${config.web3.getInfuraProjectID()}`
  )
);

async function getBlockNumber() {
  try {
    const blockNumber = await web3.eth.getBlockNumber();
    return blockNumber;      
  } catch (error) {
    return Error("Issue Getting Block Number");
  }
}

module.exports = { web3, getBlockNumber };
