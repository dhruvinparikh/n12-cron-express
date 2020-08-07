const convict = require("convict");

const cronSchema = convict({
  cronGetData: {
    doc: "Set CRON to get data currently set (morningScheduleat7)",
    format: "String",
    default: "0 7 1-31 1-12 sun-sat",
    env: "CRON_GET_DATA"
  },
});

const getCRONGetData = () => {
  try {
    const result = cronSchema.get("cronGetData");
    return result;
  } catch (error) {
    throw Error("Missing cronGetData");
  }
};

module.exports = {
  ...cronSchema,
  getCRONGetData,
}