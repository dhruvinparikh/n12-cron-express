module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("users", [
      {
        uuid: "6247e0e5-0e64-4d95-a113-20330be75251",
        created_at: new Date(),
        updated_at: new Date(),
        email: "dparikh@thekiba.com",
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
