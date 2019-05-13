const fs = require('fs');

let secret = require('./secret');
for (let i in secret) {
    delete secret[i]['secret'];
}
fs.writeFileSync('./src/coins.js', "let coins = "+ JSON.stringify(secret, null, 2) +";\n" +
    "\n" +
    "module.exports = coins;");

let coins = require('./index');
let data = coins.getCoins();

fs.writeFile('./src/coins.json', JSON.stringify(data), function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
