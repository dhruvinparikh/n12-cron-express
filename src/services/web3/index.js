const Web3 = require("web3");

// TODO: Verify if `HTTPProvider` is `deprecated` or not.
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
  )
);

async function getBlockNumber() {
  const blockNumber = await web3.eth.getBlockNumber();
  return blockNumber;
}

module.exports = { web3, getBlockNumber };
