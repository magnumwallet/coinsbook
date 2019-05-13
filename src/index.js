let coins = {
  // Custom
  'XTZ': {
    title: 'Tezos',
    type: 'tezos',
    decimals: 6,
    curve: 'ed25519',
    slip44: 1729,
  },
  'TRX': {
    title: 'TRON',
    decimals: 6,
    slip44: 195,
  },
  'BNB': {
    title: 'Binance Chain',
    type: 'tendermint',
    decimals: 8,
    slip44: 714,
  },
  'BNB_TEST': {
    title: 'Binance Chain (Testnet)',
    parent: 'BNB',
  },
  'XEM': {
    title: 'NEM',
    type: 'nem',
    decimals: 6,
    slip44: 43,
  },
  'XLM': {
    title: 'Stellar',
    type: 'stellar',
    decimals: 7,
    slip44: 148,
  },
  'KIN': {
    title: 'Kin',
    type: 'stellar',
    decimals: 5,
    slip44: 2017,
  },

  // Ethereum like
  'ETH': {
    title: 'Ethereum',
    decimals: 18,
    slip44: 60,
  },
  'ETC': {
    title: 'Ethereum Classic',
    parent: 'ETH',
    slip44: 61,
    forked: [{
      coin: 'ETH',
      height: 1920001,
      timestamp: 1468962000,
      ratio: 1,
    }],
  },
  'IOST': {
    parent: 'ETH',
    decimals: 8,
    slip44: 291,
  },
  'IOST_TEST': {
    title: 'IOST (Testnet)',
    parent: 'IOST',
  },
  'ETZ': {
    title: 'EtherZero',
    parent: 'ETH',
    forked: [{
      coin: 'ETH',
      height: 4936270,
      timestamp: 1516377600,
      ratio: 1,
    }],
  },
  'AION': {
    title: 'Aion',
    slip44: 425,
  },
  'ETI': {
    title: 'EtherInc',
    parent: 'ETH',
    slip44: 464,
    forked: [{
      coin: 'ETH',
      height: 5078585,
      timestamp: 1518452865,
      ratio: 1,
    }],
  },
  'CLO': {
    title: 'Callisto Network',
    parent: 'ETC',
    slip44: 820,
    forked: [{
      coin: 'ETC',
      height: 5500000,
      timestamp: 1520261760,
      ratio: 1,
    }],
  },
  'UBQ': {
    title: 'Ubiq',
    parent: 'ETH',
    slip44: 141,
    api: {
      type: 'web3',
      url: 'https://pyrus2.ubiqscan.io',
      api: 'https://ubiqscan.io',
    },
    chainparams: {
      networkId: 8,
    },
  },
  'EXP': {
    title: 'Expanse',
    parent: 'ETH',
    slip44: 40,
    api: {
      type: 'web3',
      url: 'https://node.expanse.tech',
      api: 'https://explorer.expanse.tech',
    },
    chainparams: {
      networkId: 2,
    },
  },

  // Bitcoin like
  'BTC': {
    title: 'Bitcoin',
    type: 'bitcoin',
    decimals: 8,
    curve: 'secp256k1',
    slip44: 0,
    chainparams: {
      magic: {
        xpub: {
          public: 0x0488b21e,
            private: 0x0488ade4,
        },
        ypub: {
          public: 0x049d7cb2,
            private: 0x049d7878,
        },
        zpub: {
          public: 0x04b24746,
            private: 0x04b2430c,
        },
        Ypub: {
          public: 0x0295b43f,
            private: 0x0295b005,
        },
        Zpub: {
          public: 0x02aa7ed3,
            private: 0x02aa7a99,
        }
      },
      bech32: 'bc',
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
      hash_functions: {
        address: 'hash256',
        transaction: 'hash256',
      },
    },
    genesis: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
    blocktime: 600,
  },
  'BCI': {
    title: 'Bitcoin Interest',
    parent: 'BTC',
    chainparams: {
      pubKeyHash: 0x66,
      scriptHash: 0x17,
      forkId: 0x4f << 8,
      witness: true,
    },
    api: {
      type: 'insight',
      url: 'https://explorer.bitcoininterest.io/api',
    },
  },
  'RDD': {
    title: 'ReddCoin',
    parent: 'BTC',
    slip44: 4,
    chainparams: {
      pubKeyHash: 0x3d,
      scriptHash: 0x05,
      wif: 0xbd,
    },
    api: {
      type: 'insight',
      url: 'https://live.reddcoin.com/api',
    },
  },
  'ZEN': {
    title: 'Horizen',
    parent: 'BTC',
    slip44: 121,
    chainparams: {
      pubKeyHash: 0x2089,
      scriptHash: 0x2096,
    },
    api: {
      type: 'insight',
      url: 'https://explorer.zensystem.io/api', // https://explorer.zensystem.io/insight-api-zen/tx/send
    },
  },
  'LEO': {
    title: 'Leocoin',
    parent: 'BTC',
    chainparams: {
      pubKeyHash: 0x12,
      scriptHash: 0x58,
      wif: 0x90,
      txdatetime: true,
    },
    api: {
      type: 'insight',
      url: 'https://insight.leocoin.org/api',
    },
  },
  'BCH': {
    title: 'Bitcoin Cash',
    parent: 'BTC',
    slip44: 145,
    forked: [{
      coin: 'BTC',
      height: 478558,
      timestamp: 1501534800,
      ratio: '1:1',
    }],
    chainparams: {
      addr_prefix: 'bitcoincash',
      forkId: 0x00,
    },
  },
  'BSV': {
    title: 'Bitcoin SV',
    parent: 'BCH',
    slip44: 236,
    forked: [{
      coin: 'BCH',
      height: 556766,
      timestamp: 1542293520,
      ratio: '1:1',
    }],
  },
  'BTG': {
    title: 'Bitcoin Gold',
    parent: 'BTC',
    slip44: 156,
    forked: [{
      coin: 'BTC',
      height: 491407,
      timestamp: 1508792400,
      ratio: '1:1',
    }],
    chainparams: {
      pubKeyHash: 0x26,
      scriptHash: 0x17,
      forkId: 0x4f,
    },
  },
  'ANON': {
    parent: 'BTC',
    slip44: 220,
    forked: [{
        coin: 'BTC',
        height: 540870,
        timestamp: 1536616749,
        ratio: '1:1',
    }, {
      coin: 'ZCL',
      height: 382307,
      timestamp: 1536627625,
      ratio: '1:2',
    }],
    chainparams: {
      pubKeyHash: 0x0582,
      scriptHash: 0x5389,
      forkId: 42 << 8,
    }
    mainnet: 1536875949,
  },
  'PPC': {
    title: 'Peercoin',
    parent: 'BTC',
    decimals: 6,
    slip44: 6,
    chainparams: {
      pubKeyHash: 0x37,
      scriptHash: 0x75,
      wif: 0xb7,
      txdatetime: true,
    }
  },
  'ZEC': {
    title: 'Zcash',
    parent: 'BTC',
    slip44: 133,
    chainparams: {
      pubKeyHash: 0x1cb8,
      scriptHash: 0x1cbd,
      wif: 0x80,
      consensusBranchId: {
        1: 0x00,
        2: 0x00,
        3: 0x5ba81b19,
        4: 0x76b809bb
      },
    }
  },
  'ZCL': {
    title: 'Zclassic',
    parent: 'ZEC',
    slip44: 147,
  },
  'ZEL': {
    title: 'ZelCash',
    parent: 'ZEC',
    slip44: 19167,
    api: {
      type: 'insight',
      url: 'https://explorer.zel.cash/api',
    },
  },
  'KMD': {
    title: 'Komodo',
    parent: 'ZEC',
    slip44: 141,
    chainparams: {
      pubKeyHash: 0x3c,
      scriptHash: 0x05,
      wif: 0xbc,
    },
  },
  'ZILLA': {
    title: 'ChainZilla',
    parent: 'KMD',
  },
  'DGB': {
    title: 'DigiByte',
    parent: 'BTC',
    slip44: 20,
    chainparams: {
      pubKeyHash: 0x1e,
      scriptHash: 0x05,
      wif: 0x80,
    },
  },
  'LTC': {
    title: 'Litecoin',
    parent: 'BTC',
    slip44: 2,
    chainparams: {
      bech32: 'ltc',
      magic_alternates: {
        Ltub: {
          xpub: {
            public: 0x019da462,
            private: 0x019d9cfe,
          },
          ypub: {
            public: 0x01b26ef6,
            private: 0x01b26792,
          }
        }
      },
      pubKeyHash: 0x30,
      scriptHash: 0x32,
      wif: 0xb0,
    },
  },
  'LCC': {
    title: 'Litecoin Cash',
    parent: 'BTC',
    decimals: 7,
    slip44: 192,
    forked: [{
      coin: 'LTC',
      height: 1371111,
      timestamp: 1518982404,
      ratio: 1,
    }],
    chainparams: {
      bech32: 'lcc',
      pubKeyHash: 0x1c,
      scriptHash: 0x32,
      scriptHash2: 0x05,
      wif: 0xb0,
      forkId: 0x40,
    },
  },
  'DASH': {
    title: 'Dash',
    parent: 'BTC',
    slip44: 5,
    chainparams: {
      pubKeyHash: 0x4c,
      scriptHash: 0x10,
      wif: 0xcc,
    },
  },
  'BTCP': {
    title: 'Bitcoin Private',
    parent: 'BTC',
    slip44: 183,
    forked: [{
      coin: 'BTC',
      height: 511346,
      timestamp: 1519826818,
      ratio: 1,
    }, {
      coin: 'ZCL',
      height: 272991,
      timestamp: 1519837402,
      ratio: 1,
    }],
    chainparams: {
      pubKeyHash: 0x1325,
      scriptHash: 0x13af,
      wif: 0x80,
      forkId: 42 << 8,
    },
  },
  'BCX': {
    title: 'BitcoinX',
    parent: 'BTC',
    slip44: 1688,
    decimals: 4,
    forked: [{
      coin: 'BTC',
      height: 498888,
      timestamp: 1513074593,
      ratio: '1:10000', // http://scr.smd.im/fs-rjsdqrdcv1-2018-12-18-16_51_34.png
    }],
    chainparams: {
      pubKeyHash: 0x4b,
      scriptHash: 0x3f,
      wif: 0x80,
      forkId: 0x10,
      witness: true,
    },
  },
  'BTX': {
    title: 'Bitcore',
    parent: 'BTC',
    slip44: 160,
    forked: [{
      coin: 'BTC',
      height: 492820,
      timestamp: 1509643431,
      ratio: '1:0.5', // http://scr.smd.im/fs-8weix2ddh1-2018-12-18-16_50_42.png
    }],
    chainparams: {
      bech32: 'btx',
      pubKeyHash: 0x03,
      scriptHash: 0x7d,
      wif: 0x80,
    },
  },
  'BSD': {
    title: 'BitSend',
    parent: 'BTC',
    slip44: 91,
    chainparams: {
      pubKeyHash: 0x66,
      scriptHash: 0x05,
      wif: 0xcc,
    }
  },
  'BTDX': {
    title: 'Bitcloud',
    parent: 'BTC',
    slip44: 128,
    chainparams: {
      pubKeyHash: 0x19,
      scriptHash: 0x05,
      wif: 0x99,
    },
  },
  'MEC': {
    title: 'Megacoin',
    parent: 'BTC',
    slip44: 217,
    chainparams: {
      pubKeyHash: 0x32,
      scriptHash: 0x22,
      wif: 0xb2,
    },
  },
  'MBC': {
    title: 'Micro Bitcoin',
    parent: 'BTC',
    tickers: {
      cryptocompare: 'MBTC',
    },
    decimals: 4,
    forked: [{
      coin: 'BTC',
      height: 525000,
      timestamp: 1527625482,
      ratio: 10000,
    }],
    chainparams: {
      pubKeyHash: 0x1a,
      scriptHash: 0x33,
      wif: 0x80,
      forkId: 0x60,
    },
  },
  'BZX': {
    title: 'BitcoinZero',
    parent: 'BTC',
    slip44: 284,
    chainparams: {
      pubKeyHash: 0x4b,
      scriptHash: 0x22,
      wif: 0xd2,
      cointype:284,
    },
  },
  'GXX': {
    title: 'GravityCoin',
    parent: 'BTC',
    slip44: 285,
    /*forked: [{
      coin: 'BTC',
      height: 539360 ,
      timestamp: 1535736740,
      ratio: 1,
    }],*/
    chainparams: {
      pubKeyHash: 0x28,
      scriptHash: 0x0a,
      wif: 0xd2,
    },
  },
  'XBA': {
    title: 'Bitcoin Air',
    parent: 'BTC',
    decimals: 6,
    forked: [{
      coin: 'BTC',
      height: 551200,
      timestamp: 1542987458,
      ratio: 1,
    }, {
      coin: 'PPC',
      height: 403400,
      timestamp: 1544889622,
      ratio: 20,
    }],
    chainparams: {
      messagePrefix: 'BitcoinAir',
      pubKeyHash: 0x4b,
      scriptHash: 0x75,
      wif: 0xcb,
      txdatetime: true,
    },
  },
  'GRS': {
    title: 'Groestlcoin',
    parent: 'BTC',
    slip44: 17,
    chainparams: {
      bech32: 'grs',
      pubKeyHash: 0x24,
      scriptHash: 0x05,
      wif: 0x80,
      hash_functions: {
        address: 'groestl',
        transaction: 'hash256',
      },
    },
    api: {
      type: 'insight',
      url: 'https://groestlsight.groestlcoin.org/api',
    },
  },
  'VIA': {
    title: 'Viacoin',
    parent: 'BTC',
    slip44: 14,
    chainparams: {
      pubKeyHash: 0x47,
      scriptHash: 0x21,
      wif: 0xc7,
    },
    api: {
      type: 'insight',
      url: 'https://explorer.viacoin.org/api',
    },
  },
  'NIX': {
    parent: 'BTC',
    slip44: 400,
    chainparams: {
      pubKeyHash: 0x26,
      scriptHash: 0x35,
      wif: 0x80,
    },
    api: {
      type: 'insight',
      url: 'https://blockchain.nixplatform.io/api',
    },
  },
  'PIVX': {
    parent: 'BTC',
    slip44: 119,
    chainparams: {
      pubKeyHash: 0x1e,
      scriptHash: 0x0d,
      wif: 0xd4,
    }
  },
  'FLO': {
    parent: 'BTC',
    slip44: 216,
    chainparams: {
      magic: {
        xpub: {
          public: 0x0134406b,
          private: 0x01343c31,
        },
      },
      pubKeyHash: 0x23,
      pubKeyHash2: 0x5e,
      scriptHash: 0x08,
      wif: 0xa3,
      wif2: 0xb0,
    },
    api: {
      type: 'insight',
      url: 'https://flo.mgnm.rocks/api',
    },
  },
  'XZC': {
    title: 'ZCoin',
    parent: 'BTC',
    slip44: 136,
    chainparams: {
      pubKeyHash: 0x52,
      scriptHash: 0x07,
      wif: 0xd2,
    },
    api: {
      type: 'insight',
      url: 'https://explorer.zcoin.io/api',
    },
  },
  'XMY': {
    title: 'Myriadcoin',
    parent: 'BTC',
    slip44: 90,
    chainparams: {
      pubKeyHash: 0x32,
      scriptHash: 0x09,
      wif: 0xb2,
    },
    api: {
      type: 'insight',
      url: 'https://xmy.mgnm.rocks/api',
    },
  },
  'FTC': {
    title: 'Feathercoin',
    parent: 'BTC',
    slip44: 8,
    chainparams: {
      pubKeyHash: 0x0e,
      scriptHash: 0x05,
      wif: 0x8e,
    },
    api: {
      type: 'insight',
      url: 'https://explorer.feathercoin.com/api',
    },
  },
  'ECA': {
    title: 'Electra',
    parent: 'BTC',
    slip44: 249,
    chainparams: {
      pubKeyHash: 0x21,
      scriptHash: 0x28,
      wif: 0xa1,
    }
  },
  'DOGE': {
    title: 'Dogecoin',
    parent: 'BTC',
    slip44: 3,
    chainparams: {
      magic: {
        xpub: {
          public: 0x02facafd,
          private: 0x02fac398,
        },
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x16,
      wif: 0x9e,
    }
  },
  'MONA': {
    title: 'Monacoin',
    parent: 'BTC',
    slip44: 22,
    chainparams: {
      pubKeyHash: 0x32,
      scriptHash: 0x05,
      wif: 0xb0,
    },
    api: {
      type: 'insight',
      url: 'https://mona.chainsight.info/api',
    },
  },
  'XVG': {
    title: 'Verge',
    parent: 'BTC',
    slip44: 77,
    chainparams: {
      magic: {
        xpub: {
          public: 0x022d2533,
          private: 0x0221312b,
        },
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x21,
      wif: 0x9e,
    },
  },
  'BTH': {
    title: 'Bithereum',
    parent: 'BTC',
    chainparams: {
      pubKeyHash: 0x19,
      scriptHash: 0x28,
      wif: 0x80,
    },
    api: {
      type: 'insight',
      url: 'http://explorer.bithereum.network/insight-api',
    },
  },
  'VTC': {
    title: 'Vertcoin',
    parent: 'BTC',
    slip44: 28,
    chainparams: {
      pubKeyHash: 0x47,
      scriptHash: 0x05,
      wif: 0x1c,
    },
  },
  'NLG': {
    title: 'Gulden',
    parent: 'BTC',
    slip44: 87,
    chainparams: {
      pubKeyHash: 0x26,
      scriptHash: 0x62,
      wif: 0xa6,
    },
  },
  'QTUM': {
    title: 'Qtum',
    parent: 'BTC',
    slip44: 2301,
    chainparams: {
      pubKeyHash: 0x3a,
      scriptHash: 0x32,
      wif: 0x80,
    },
  },
  'NMC': {
    title: 'Namecoin',
    parent: 'BTC',
    slip44: 7,
    chainparams: {
      pubKeyHash: 0x34,
      scriptHash: 0x0d,
      wif: 0xb4,
    },
  },
  'BCD': {
    title: 'Bitcoin Diamond',
    parent: 'BTC',
    slip44: 999,
    forked: [{
      coin: 'BTC',
      height: 495866,
      timestamp: 1511515212,
      ratio: 10,
    }],
    chainparams: {
      txblockhash: true,
    },
  },
};

let getCoins = function(list) {
  list = list || coins;

  let result = {};
  for (let coin in list) {
    let record = {};
    let item = list[coin];

    if (item.parent) {
      let parent = list[item.parent];
      for (let key in parent) {
        record[key] = parent[key];
      }
    }

    for (let key in item) {
      if (key === 'chainparams') {
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
    record.satoshi = Math.pow(10, record.decimals);

    let messagePrefix = record.messagePrefix || record.title;
    record.signed_message_header = record.signed_message_header || `${messagePrefix} Signed Message:\n`;
    result[coin] = record;
  }

  return result;
}

module.exports = {
  coins: coins,
  getCoins: getCoins,
};

/*
XTZ: delegating: {
      name: 'Baking',
    },
Eth like:
    gas: {
      ticker: 'Gwei',
      title: 'Gas',
    },
  Other:
    KMDVOTE2019
 */
