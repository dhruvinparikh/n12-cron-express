const uuids = require("./uuid.json");
const fs = require("fs");

const uuidArr = Object.keys(uuids);
let uuidIndex = 0;

// script - 1
fs.readdirSync("./tokens").forEach((token, index) => {
  fs.readdirSync(`./tokens/${token}/`).forEach((pair, index) => {
    const tp = pair.split("-");
    fs.appendFileSync(
      "./output.txt",
      `"${
        uuidArr[uuidIndex]
      }":getPairPrice(${tp[0].toUpperCase()}_ADDRESS,${tp[1].toUpperCase()}_ADDRESS),`
    );
    fs.appendFileSync(
      "./output-mig.txt",
      `{
        uuid: '${uuidArr[uuidIndex]}',
        created_at: new Date(),
        updated_at: new Date(),
        name: '${tp[0].toUpperCase()} <> ${tp[1].toUpperCase()}',
        short_description: '${tp[0].toUpperCase()} per ${tp[1].toUpperCase()}',
        long_description: '${tp[0].toUpperCase()} <> ${tp[1].toUpperCase()} rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },`
    );
    uuidIndex++;
  });
});
