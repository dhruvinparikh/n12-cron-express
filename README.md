# n12-cron-express
N12 cron services. 


## Getting Started

- `git clone https://github.com/blockxlabs/n12-cron-express.git`
- `npm install`

## Run seeds
```bash
./node_modules/.bin/sequelize-cli db:seed:all --config ./src/db/config/config.js --seeders-path ./src/db/seeders
```

## Undo All Seeds
```
./node_modules/.bin/sequelize-cli db:seed:undo:all --config ./src/db/config/config.js --seeders-path ./src/db/seeders
```

