require('dotenv').config() 

const db = require('./db.config');
const cron = require('./cron.config');
const logger = require('./logger.config');
const web3 = require('./web3.config');

// Perform validation
db.validate({ allowed : "strict" });
cron.validate({ allowed: "strict" });
logger.validate({ allowed: "strict" });
web3.validate({ allowed: "strict" });

module.exports = { db, cron, logger, web3 };
