const convict = require("convict");

const loggingSchema = convict({
  loggerLevel: {
    doc: "Winston Logging Level",
    format: ["info", "debug"],
    default: "info",
    env: "LOG_LEVEL"
  },
});

const getLoggerLevel = () => {
  try {
    const result = loggingSchema.get("loggerLevel");
    return result;
  } catch (error) {
    throw Error("Missing loggingLevel");
  }
};

module.exports = {
  ...loggingSchema,
  getLoggerLevel,
}