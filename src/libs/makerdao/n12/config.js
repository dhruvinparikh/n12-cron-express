require('dotenv').config() 
const convict = require("convict");

const makerDaoSchema = convict({
  makerDaiAdress: {
    doc: "Maker Dao Dai address",
    format: "String",
    default: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    env: "MKR_DAI_ADDRESS"
  },
});

const getMakerDaiAdress = () => {
  try {
    const result = makerDaoSchema.get("makerDaiAdress");
    return result;
  } catch (error) {
    throw Error("Missing makerDaiAdress");
  }
};

makerDaoSchema.validate({ allowed: "strict" });

module.exports = { ...makerDaoSchema, getMakerDaiAdress };