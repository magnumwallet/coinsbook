let coins = require('./coins');

let getCoins = function(list) {
  list = list || coins;

  let result = {};
  for (let coin in list) {
    let record = {};
    let item = JSON.parse(JSON.stringify(list[coin]));

    function fillSectet(item, i, value)
    {
      if (Array.isArray(value)) {
          item[i] = item[i] || [];
            item[i].splice(0, 0, ...value);
      } else {
          item[i] = value;
      }
    }

    if (item.hidden) {
        for (let i in item.hidden) {
          fillSectet(item, i, item.hidden[i])
        }
        delete item.hidden;
    }
    if (item.secret) {
        for (let i in item.secret) {
          fillSectet(item, i, item.secret[i])
        }
        delete item.secret;
    }

    if (item.parent) {
      let parent = result[item.parent];
      for (let key in parent) {
        if (['genesis', 'blocktime', 'api', 'electrum', 'explorer', 'coin', 'ticker', 'name'].indexOf(key) == -1) {
            record[key] = JSON.parse(JSON.stringify(parent[key]));
        }
      }
    }

    for (let key in item) {
      if (key === 'chainparams') {
        record[key] = record[key] || {};
        for (let i in item[key]) {
          record[key][i] = item[key][i];
        }
      } else {
        record[key] = item[key];
      }
    }

    record.coin = record.coin || coin;

    record.title = record.title || record.coin;
    record.name = record.name || record.title.toLowerCase().replace(/[\r\n\t]+/g, ' ').replace(/\s\s+/g, ' ').trim();
    record.ticker = record.ticker || record.coin;
    record.satoshi = Math.pow(10, record.decimals).toString();

    //let messagePrefix = record.messagePrefix || record.title;
    //record.signed_message_header = record.signed_message_header || `${messagePrefix} Signed Message:\n`;

    result[coin] = record;
  }

  return result;
}

module.exports = {
  coins: coins,
  getCoins: getCoins,
};
