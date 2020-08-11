const convict = require("convict");

const web3Schema = convict({
  infuraKey: {
    doc: "Infura Key",
    format: "String",
    env: "WEB3_INFURA_KEY",
  },
});

const getInfuraKey = () => {
  try {
    const result = web3Schema.get("infuraKey");
    return result;
  } catch (error) {
    throw Error("Missing infuraKey");
  }
};

module.exports = {
  ...web3Schema,
  getInfuraKey,
};
