let disabled = {
  'UBTC': {
    title: 'UnitedBitcoin',
    parent: 'BTC',
    forked: [{
      coin: 'BTC',
      height: 498777 ,
      timestamp: 1513016352,
      ratio: '1:1',
    }],
  },
  'LBTC': {
    title: 'Lightning Bitcoin',
    parent: 'BTC',
    forked: [{
      coin: 'BTC',
      height: 499999,
      timestamp: 1513622087,
      ratio: '1:1',
    }],
  },
  'BCA': {
    title: 'Bitcoin ATOM',
    parent: 'BTC',
  },
  'BCZ': {
    title: 'BitcoinCash Zero',
    parent: 'BTC',
    forked: [{
      coin: 'BZX',
      height: 1,
      timestamp: 1535555555,
      ratio: '1:60',
    }, {
      coin: 'BCH',
      height: 1,
      timestamp: 1535555555,
      ratio: '1:1',
    }, {
      coin: 'BSV',
      height: 1,
      timestamp: 1535555555,
      ratio: '1:1',
    }],
    chainparams: {
      pubKeyHash: 0x00,
      scriptHash: 0x00,
      wif: 0xd2,
    },
  },
  'BIFI': {
    title: 'Bitcoin FILE',
    parent: 'BTC',
    slip44: 201,
    chainparams: {
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
      //pubKeyHash: 0x6f,
      //scriptHash: 0xc4,
      //wif: 0xef,
    },
    api: {
      type: 'insight',
        url: 'https://explorer.bitcoinfile.org/insight-api', //url: 'https://bifi.mgnm.rocks/insight-api',
    },
  },
  'XBI': {
    title: 'Bitcoin Incognito',
    parent: 'BTC',
  },
  'DCR': {
    title: 'Decred',
    parent: 'BTC',
    slip44: 42,
    chainparams: {
      magic: {
        xpub: {
          public: 0x02fda4e8,
          private: 0x02fda926,
        },
      },
      pubKeyHash: 0x073f,
      scriptHash: 0x071a,
      wif: 0x22de, // https://github.com/decred/dcrd/blob/7f75331d6d27fe56dd8a99cf0ce11bda67e133d3/chaincfg/mainnetparams.go
    },
    api: {
      type: 'insight',
        url: 'https://mainnet.decred.org/api',
    },
  },
  'RVN': {
    title: 'Ravencoin',
    parent: 'BTC',
    slip44: 175,
    chainparams: {
      pubKeyHash: 60,
      scriptHash: 122,
      wif: 128,
    },
    api: {
      type: 'insight',
      url: 'https://ravencoin.network/api', //https://rvn.mgnm.rocks/api,
    },
  },
  'PART': {
   title: 'Particl',
    parent: 'BTC',
    slip44: 44,
    chainparams: {
      pubKeyHash: 0x38,
      scriptHash: 0x3c,
      wif: 0x6c,
    },
    api: {
      type: 'insight',
        url: 'https://explorer.particl.io/api',
    },
  },
  'IOP': {
    title: 'Internet of People',
    parent: 'BTC',
    slip44: 66,
    chainparams: {
      magic: {
        xpub: {
          public: 0x270915f,
          private: 0xae3416f6,
        },
      },
      pubKeyHash: 117,
      scriptHash: 174,
      wif: 49, // https://github.com/decred/dcrd/blob/7f75331d6d27fe56dd8a99cf0ce11bda67e133d3/chaincfg/mainnetparams.go
    },
    api: {
      type: 'insight',
        url: 'https://mainnet.iop.cash/api',
    },
  },
  'ELA': {
    title: 'Elastos',
    parent: 'BTC',
    slip44: 2305,
    chainparams: {
      pubKeyHash: 99,
      scriptHash: 99,
      wif: 99,
    },
    api: {
      type: 'insight',
      url: 'https://blockchain.elastos.org/api',
    },
  },
  'DIVVY': {
    title: 'Dispatch Labs',
    decimals: 0,
  },
  'MNT': {
    title: 'Minter',
    decimals: 18,
  },
  'MNT_TEST': {
    title: 'Minter (Testnet)',
    parent: 'MNT',
  },
  'ATOM': {
    title: 'Cosmos',
    decimals: 8,
  },
  'ADA': {
    title: 'Cardano',
      type: 'cardano',
      decimals: 6,
      slip44: 1815,
  },
  'XRP': {
    title: 'Ripple',
      type: 'ripple',
      decimals: 6,
      slip44: 144,
  },
  'NEO': {
    title: 'NEO',
      type: 'neo',
      decimals: 6,
      slip44: 888,
  },
  'ONT': {
    decimals: 6,
      type: 'ontology',
      slip44: 1024,
  },
  'XMR': {
    title: 'Monero',
      type: 'monero',
      decimals: 6,
      slip44: 128,
  },
  'WAVES': {
    title: 'Waves',
      type: 'waves',
      decimals: 8,
      slip44: 5741564,
  },
  'LSK': {
    title: 'Lisk',
      type: 'lisk',
      decimals: 8,
      slip44: 134,
  },
};

module.exports = disabled;
