// here the code of getting totalDAISupply from MakerDAO will there

/* Purpose of this script is to receive a total MKR issued till date */

// Info @ https://etherscan.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2#code

const { web3 } = require("../../../services/web3");

const abi = require("./dai.json");
const contractAddress = process.env.DAI_CONTRACT_ADDRESS;
var makerContract = new web3.eth.Contract(abi, contractAddress);

async function getTotalDAISupply(options = {}) {
  const totalSupply = await makerContract.methods.totalSupply().call(options);
  return totalSupply;
}

module.exports = { getTotalDAISupply };
