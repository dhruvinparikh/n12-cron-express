module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('notifications', [
      {
        uuid: '6247e0e5-0e64-4d95-a113-20330be75251',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'totalDAISupply',
        short_description: 'totaly supply for Dai ',
        long_description: 'Dai is a stable, decentralized and unbiased currency.',
        d_app_uuid: '0d4d4c2c-f403-4046-b07e-606a60af9f7f'
      },
      {
        uuid: '48c075fd-4144-4bcd-9ba8-7916999a6f92',
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