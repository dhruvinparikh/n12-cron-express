const { CronJob } = require("cron");
const async = require("async");
const express = require("express");
const notifications = require("./libs/");
const DB = require("./services/db/");
const mailService = require("./services/email/mailgun");
const { getBlockNumber } = require("./services/web3");
const { cron } = require("./config");
const morningScheduleat7 = cron.getCRONGetDataFor7AM();
const morningScheduleat8 = cron.getCRONGetDataFor8AM();
const { logger } = require("./services/logger");

const app = express();

const backUpJobFn = async () => {
  const result = await DB.getAllNotifications();
  const notificationUuidArr = result.map(({ uuid }) => uuid);
  // Iterates over the collection.
  async.mapSeries(notificationUuidArr, async (notificationUuid) => {
    try {
      // get the blocknumber
      logger.info(`Started fetching blocknumber for ${notificationUuid}`);
      const blockNumber = await getBlockNumber();
      logger.info(`Finished fetching blocknumber for ${notificationUuid}`);
      logger.info(`Started fetching data for ${notificationUuid}`);
      const result = await notifications[notificationUuid]({
        defaultBlock: blockNumber,
      });
      logger.info(`Finished fetching data for ${notificationUuid}`);
      // create an entry in data table
      logger.info(`Started pushing blocknumber for ${notificationUuid}`);
      const insertTX = await DB.insertNotificationData({
        notificationUuid,
        blockNumber,
      });
      logger.info(`Finished pushing blocknumber for ${notificationUuid}`);
      const data = JSON.stringify({ result });
      logger.info(`Started pushing data for ${notificationUuid}`);
      await DB.updateNotificationData(
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

const notifyJobFn = async () => {
  const allUsers = await DB.getAllUsers();
  async.mapSeries(allUsers, async (user) => {
    const emailContent = { notifications: [] };
    const userNotifications = await DB.getAllUserNotifications({
      where: { userUuid: user.uuid },
    });
    await async.mapSeries(userNotifications, async (userNotification) => {
      const dappDetails = await DB.getDApp({
        where: { uuid: userNotification.dAppUuid },
      });
      const notificationDetails = await DB.getNotification({
        where: { uuid: userNotification.notificationsUuid },
      });
      const notificationData = await DB.getNotificationData({
        where: { notificationUuid: notificationDetails.uuid },
      });
      emailContent.notifications.push({
        dappName: dappDetails.name,
        notificationName: notificationDetails.name,
        result: notificationData.data.toString(),
      });
    });
    const emailData = mailService.createNotificationEmailTemplate(
      user,
      emailContent
    );
    await mailService.sendEmail(emailData);
  });
};

// At 07:00 on every day-of-month
// from 1 through 31 and on every day-of-week from Sunday through Saturday
// in every month from January through December. => 0 7 1-31 1-12 sun-sat
// schedule takes two arguments, cron time and the task to call when we reach that time
// cron.schedule(morningScheduleat7, job);

const backupJob = new CronJob(morningScheduleat7, backUpJobFn);
const notifyJob = new CronJob(morningScheduleat8, notifyJob);

backupJob.start();
notifyJob.start();

app.listen("3128");
