const convict = require("convict");

const web3Schema = convict({
  infuraKey: {
    doc: "Infura Key",
    format: "String",
    default: null,
    env: "WEB3_INFURA_KEY",
  },
});

const getInfuraKey = () => {
  try {
    const result = web3Schema.get("infuraKey");
    return result;
  } catch (error) {
    throw Error("Missing loggingLevel");
  }
};

module.exports = {
  ...web3Schema,
  getInfuraKey,
};
