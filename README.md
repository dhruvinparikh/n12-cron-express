# n12-cron-express
N12 cron services. 


## Getting Started

- `git clone https://github.com/blockxlabs/n12-cron-express.git`
- `npm install`
- Run migrations
```
./node_modules/.bin/runmigration --migrations-path ./src/db/migrations --models-path ./src/db/models/
```
- Run seeds

./node_modules/.bin/sequelize-cli db:seed:all --config ./src/db/config/config.js --seeders-path ./src/db/seeders
```

- Undo All Seeds

```
./node_modules/.bin/sequelize-cli db:seed:undo:all --config ./src/db/config/config.js --seeders-path ./src/db/seeders
```

