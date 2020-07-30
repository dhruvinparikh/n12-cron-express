require("dotenv").config("../.env");
const cron = require("node-cron");
const async = require("async");
const notifications = require("./libs/");
const {
  getAllNotifications,
  insertNotificationData,
  updateNotificationData,
} = require("./services/db/");
const { getBlockNumber } = require("./services/web3");
const morningScheduleat7 = process.env.CRON_EXPRESSION;
const { logger } = require("./config/logging");

const job = async () => {
  const result = await getAllNotifications();
  const notificationUuidArr = result.map(({ uuid }) => uuid);
  // Iterates over the collection.
  async.mapSeries(notificationUuidArr, async (notificationUuid) => {
    try {
      // get the blocknumber
      logger.info(`Started fetching blocknumber for ${notificationUuid}`);
      const blockNumber = await getBlockNumber();
      logger.info(`Finished fetching blocknumber for ${notificationUuid}`);
      // create an entry in data table
      logger.info(`Started pushing blocknumber for ${notificationUuid}`);
      const insertTX = await insertNotificationData({
        notificationUuid,
        blockNumber,
      });
      logger.info(`Finished pushing blocknumber for ${notificationUuid}`);
      logger.info(`Started fetching data for ${notificationUuid}`);
      const result = await notifications[notificationUuid]({
        defaultBlock: blockNumber,
      });
      logger.info(`Finished fetching data for ${notificationUuid}`);
      const data = JSON.stringify({ result });
      logger.info(`Started pushing data for ${notificationUuid}`);
      await updateNotificationData(
        { data },
        {
          notificationUuid: insertTX.notificationUuid,
          blockNumber: insertTX.blockNumber,
        }
      );
      logger.info(`Finished pushing data for ${notificationUuid}`);
    } catch (e) {
      logger.error(`Error [${notificationUuid}]=> ${e}`);
    }
  });
};

// At 07:00 on every day-of-month
// from 1 through 31 and on every day-of-week from Sunday through Saturday
// in every month from January through December. => 0 7 1-31 1-12 sun-sat
// schedule takes two arguments, cron time and the task to call when we reach that time
cron.schedule(morningScheduleat7, job);
