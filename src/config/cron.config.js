const convict = require("convict");

const cronSchema = convict({
  cronGetDataAt7AM: {
    doc: "Set CRON to get data currently set (morningScheduleat7)",
    format: "String",
    default: "0 7 1-31 0-11 sun-sat",
    env: "CRON_GET_DATA_7_AM",
  },
  cronGetDataAt8AM: {
    doc: "Set CRON to get data currently set (morningScheduleat8)",
    format: "String",
    default: "0 8 1-31 0-11 sun-sat",
    env: "CRON_GET_DATA_8_AM",
  },
});

const getCRONGetDataFor7AM = () => {
  try {
    const result = cronSchema.get("cronGetDataAt7AM");
    return result;
  } catch (error) {
    throw Error("Missing cronGetDataAt7AM");
  }
};

const getCRONGetDataFor8AM = () => {
  try {
    const result = cronSchema.get("cronGetDataAt8AM");
    return result;
  } catch (error) {
    throw Error("Missing cronGetDataAt8AM");
  }
};

module.exports = {
  ...cronSchema,
  getCRONGetDataFor7AM,
  getCRONGetDataFor8AM,
};
