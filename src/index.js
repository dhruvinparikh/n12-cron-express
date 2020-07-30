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

const job = async () => {
  const result = await getAllNotifications();
  const notificationUuidArr = result.map(({ uuid }) => uuid);
  async.mapSeries(notificationUuidArr, async (notificationUuid) => {
    // get the blocknumber
    const blockNumber = await getBlockNumber();
    // create an entry in data table
    const insertTX = await insertNotificationData({
      notificationUuid,
      blockNumber,
    });
    const result = await notifications[notificationUuid]({
      defaultBlock: blockNumber,
    });
    const data = JSON.stringify({ result });
    await updateNotificationData(
      { data },
      {
        notificationUuid: insertTX.notificationUuid,
        blockNumber: insertTX.blockNumber,
      }
    );
  });
};

// At 07:00 on every day-of-month
// from 1 through 31 and on every day-of-week from Sunday through Saturday
// in every month from January through December. => 0 7 1-31 1-12 sun-sat
// schedule takes two arguments, cron time and the task to call when we reach that time
cron.schedule(morningScheduleat7, job);
