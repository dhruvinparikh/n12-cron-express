const { CronJob } = require("cron");
const async = require("async");
const express = require("express");
const { Op } = require("sequelize");
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
  try {
    logger.info(`Getting today's start time`);
    const TODAY_START = new Date().setHours(0, 0, 0, 0);;
    logger.info(`Finished getting today's start time`);
    logger.info(`Start getting today's date`);
    const NOW = new Date();
    logger.info(`Finished getting today's date`);
    logger.info(`Start getting all subscribers`);
    const allUsers = await DB.getAllUsers();
    logger.info(`Finished getting all subscribers`);
    try {
      logger.info(`Start iterating through all the subscribers`);
      async.mapSeries(allUsers, async (user) => {
        const emailContent = { notifications: [] };
        let userNotifications;
        try {
          logger.info(`Start getting all the notifications`);
          userNotifications = await DB.getAllUserNotifications({
            where: { userUuid: user.uuid },
          });
          logger.info(`Finished getting all the notifications`);
        } catch (e) {
          logger.error("Error getting all the notifications");
        }
        try {
          logger.info(`Start creating email content for ${user.email}`);
          await async.mapSeries(userNotifications, async (userNotification) => {
            logger.info(`Start getting dapp details having uuid ${userNotification.dAppUuid}`);
            const dappDetails = await DB.getDApp({
              where: { uuid: userNotification.dAppUuid },
            });
            logger.info(`Finished getting dapp details having uuid ${userNotification.dAppUuid}`);
            logger.info(
              `Start getting notification details having uuid ${userNotification.notificationsUuid}`
            );
            const notificationDetails = await DB.getNotification({
              where: { uuid: userNotification.notificationsUuid },
            });
            logger.info(
              `Finished getting notification details having uuid ${userNotification.notificationsUuid}`
            );
            logger.info(
              `Start getting notification result having uuid ${notificationDetails.uuid}`
            );
            const notificationData = await DB.getNotificationData({
              where: {
                notificationUuid: notificationDetails.uuid,
                created_at: {
                  [Op.gt]: TODAY_START,
                  [Op.lt]: NOW,
                },
              },
            });
            logger.info(
              `Finished getting notification result having uuid ${notificationDetails.uuid}`
            );
            if (notificationData) {
              emailContent.notifications.push({
                dappName: dappDetails.name,
                notificationName: notificationDetails.name,
                result: notificationData.data.toString(),
              });
            }
          });
        } catch (e) {
          logger.error(`Error creating email content for ${user.email}`);
        }
        if (emailContent.notifications.length > 0) {
          try {
            logger.info(`Start sending notification to ${user.email}`);
            const emailData = mailService.createNotificationEmailTemplate(user, emailContent);
            await mailService.sendEmail(emailData);
            logger.info(`Finished sending notification to ${user.email}`);
          } catch (e) {
            logger.error(`Error sending email to ${user.email} => ${e}`);
          }
        }
      });
      logger.info(`Done iterating through all the subscribers`);
    } catch (e) {
      logger.error("Unable to initiate notifying", e);
    }
  } catch (e) {
    logger.error("Error in the notifying subscribers", e);
  }
};

const backupJob = new CronJob(morningScheduleat7, backUpJobFn);
const notifyJob = new CronJob(morningScheduleat8, notifyJobFn);

backupJob.start();
notifyJob.start();

app.listen("3128");
