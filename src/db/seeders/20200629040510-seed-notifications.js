module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('notifications', [
      {
        uuid: '00000001-2c32-4564-8d54-e00d4001b744',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'totalDAISupply',
        short_description: 'totaly supply for Dai ',
        long_description: 'Dai is a stable, decentralized and unbiased currency.',
        d_app_uuid: '0d4d4c2c-f403-4046-b07e-606a60af9f7f'
      },
      {
        uuid: '00000002-2c32-4564-8d54-e00d4001b744',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> WBTC',
        short_description: 'WETH per WBTC',
        long_description: 'WETH <> WBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      }
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('notifications', null, {});
  }
};