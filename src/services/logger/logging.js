const config = require('../../config');
const { createLogger, format, transports } = require("winston");

const { combine, timestamp, simple } = format;

const options = {
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        simple()
    )
}

const logger = createLogger(options);

const DailyRotateFile = require('winston-daily-rotate-file');

logger.configure({
    level: 'verbose',
    transports: [
      new transports.Console({
        level: config.logger.getLoggerLevel()
      }),
      new DailyRotateFile({
        filename: 'cron.log'
      })
    ]
  });
  
  if (config.db.getEnv() !== 'production') {
    logger.debug('Logging initialized at debug level');
  }
  
  module.exports = logger;