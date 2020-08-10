module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('user_notifications', [
      {
        uuid: '9577a984-28ba-41df-be7e-94aa5fefb0bf',
        created_at: new Date(),
        updated_at: new Date(),
        user_uuid: '6247e0e5-0e64-4d95-a113-20330be75251',
        d_app_uuid: '0d4d4c2c-f403-4046-b07e-606a60af9f7f',
        notifications_uuid: '6247e0e5-0e64-4d95-a113-20330be75251',
      },
      {
        uuid: '8577a984-28ba-41df-be7e-94aa5fefb0bf',
        created_at: new Date(),
        updated_at: new Date(),
        user_uuid: '6247e0e5-0e64-4d95-a113-20330be75251',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80',
        notifications_uuid: '48c075fd-4144-4bcd-9ba8-7916999a6f92',
      }
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('user_notifications', null, {});
  }
};