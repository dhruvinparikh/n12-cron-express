const convict = require("convict");

const web3Schema = convict({
  infuraProjectID: {
    doc: "Infura Project ID",
    format: "String",
    default: null,
    env: "INFURA_PROJECT_ID"
  },
});

const getInfuraProjectID = () => {
  try {
    const result = web3Schema.get("infuraProjectID");
    return result;
  } catch (error) {
    throw Error("Missing infuraProjectID");
  }
};

module.exports = {
  ...web3Schema,
  getInfuraProjectID,
};
