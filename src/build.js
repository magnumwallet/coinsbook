const fs = require('fs');

let secret = require('./secret');

let secretData = JSON.parse(JSON.stringify(secret));
let hiddenData = JSON.parse(JSON.stringify(secret));
let publicData = JSON.parse(JSON.stringify(secret));

for (let i in secret) {
    delete publicData[i]['hidden'];
    delete publicData[i]['secret'];
    delete hiddenData[i]['secret'];
    //delete secret[i]['magnum'];
}
fs.writeFileSync('./src/coins.js', "let coins = "+ JSON.stringify(publicData, null, 2) +";\n" +
    "\n" +
    "module.exports = coins;");

let coins = require('./index');
let data = coins.getCoins();

fs.writeFileSync('./lib/secret.json', JSON.stringify(coins.getCoins(secretData), null, 2));
fs.writeFileSync('./lib/coins.json', JSON.stringify(coins.getCoins(hiddenData), null, 2));

fs.writeFile('./src/coins.json', JSON.stringify(data, null, 2), function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
