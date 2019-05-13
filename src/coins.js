let coins = {
  "XTZ": {
    "title": "Tezos",
    "type": "tezos",
    "decimals": 6,
    "curve": "ed25519",
    "slip44": 1729,
    "api": [
      {
        "url": "https://mainnet.tezrpc.me"
      }
    ]
  },
  "TRX": {
    "title": "TRON",
    "decimals": 6,
    "slip44": 195
  },
  "BNB": {
    "title": "Binance Chain",
    "type": "tendermint",
    "decimals": 8,
    "slip44": 714
  },
  "BNB_TEST": {
    "title": "Binance Chain (Testnet)",
    "parent": "BNB"
  },
  "XEM": {
    "title": "NEM",
    "type": "nem",
    "decimals": 6,
    "slip44": 43
  },
  "XLM": {
    "title": "Stellar",
    "type": "stellar",
    "decimals": 7,
    "slip44": 148
  },
  "KIN": {
    "title": "Kin",
    "type": "stellar",
    "decimals": 5,
    "slip44": 2017
  },
  "ETH": {
    "title": "Ethereum",
    "decimals": 18,
    "slip44": 60
  },
  "ETC": {
    "title": "Ethereum Classic",
    "parent": "ETH",
    "slip44": 61,
    "forked": [
      {
        "coin": "ETH",
        "height": 1920001,
        "timestamp": 1468962000,
        "ratio": 1
      }
    ],
    "api": [
      {
        "url": "https://ethereumclassic.network"
      }
    ]
  },
  "IOST": {
    "parent": "ETH",
    "decimals": 8,
    "slip44": 291
  },
  "IOST_TEST": {
    "title": "IOST (Testnet)",
    "parent": "IOST"
  },
  "ETZ": {
    "title": "EtherZero",
    "parent": "ETH",
    "forked": [
      {
        "coin": "ETH",
        "height": 4936270,
        "timestamp": 1516377600,
        "ratio": 1
      }
    ],
    "api": [
      {
        "url": "https://etzrpc.org"
      }
    ]
  },
  "AION": {
    "title": "Aion",
    "parent": "ETH",
    "slip44": 425
  },
  "ETI": {
    "title": "EtherInc",
    "parent": "ETH",
    "slip44": 464,
    "forked": [
      {
        "coin": "ETH",
        "height": 5078585,
        "timestamp": 1518452865,
        "ratio": 1
      }
    ],
    "api": [
      {
        "url": "https://api.einc.io/jsonrpc/mainnet/"
      }
    ]
  },
  "CLO": {
    "title": "Callisto Network",
    "parent": "ETC",
    "slip44": 820,
    "forked": [
      {
        "coin": "ETC",
        "height": 5500000,
        "timestamp": 1520261760,
        "ratio": 1
      }
    ],
    "api": [
      {
        "url": "https://clo-geth.0xinfra.com/"
      }
    ]
  },
  "UBQ": {
    "title": "Ubiq",
    "parent": "ETH",
    "slip44": 141,
    "chainparams": {
      "networkId": 8
    },
    "api": [
      {
        "type": "web3",
        "url": "https://pyrus2.ubiqscan.io",
        "api": "https://ubiqscan.io"
      }
    ]
  },
  "EXP": {
    "title": "Expanse",
    "parent": "ETH",
    "slip44": 40,
    "chainparams": {
      "networkId": 2
    },
    "api": [
      {
        "type": "web3",
        "url": "https://node.expanse.tech",
        "api": "https://explorer.expanse.tech"
      }
    ]
  },
  "BTC": {
    "title": "Bitcoin",
    "type": "bitcoin",
    "decimals": 8,
    "curve": "secp256k1",
    "slip44": 0,
    "chainparams": {
      "magic": {
        "xpub": {
          "public": 76067358,
          "private": 76066276
        },
        "ypub": {
          "public": 77429938,
          "private": 77428856
        },
        "zpub": {
          "public": 78792518,
          "private": 78791436
        },
        "Ypub": {
          "public": 43365439,
          "private": 43364357
        },
        "Zpub": {
          "public": 44728019,
          "private": 44726937
        }
      },
      "bech32": "bc",
      "pubKeyHash": 0,
      "scriptHash": 5,
      "wif": 128,
      "hash_functions": {
        "address": "hash256",
        "transaction": "hash256"
      }
    },
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.bitcoininterest.io/api"
      },
      {
        "type": "blockbook",
        "url": "https://btc1.trezor.io"
      },
      {
        "type": "blockbook",
        "url": "https://btc2.trezor.io"
      }
    ],
    "electrum": [
      "electrum.hodlister.co:s50002",
      "btc.jochen-hoenicke.de:s50002",
      "hetzner01.fischl-online.de:s50002",
      "37.187.141.73:s50002",
      "electrum.nute.net:50002",
      "109.192.105.174:s50002",
      "fedaykin.goip.de:s50002",
      "62.210.6.26:s50002",
      "e-1.claudioboxx.com:s50002",
      "88.198.39.205:s50002",
      "orannis.com:s50001",
      "electrum.anduck.net:s50012"
    ],
    "explorer": [
      {
        "address": "https://btc1.trezor.io/address/%address%",
        "tx": "https://btc1.trezor.io/tx/%hash%"
      }
    ],
    "genesis": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
    "blocktime": 600
  },
  "BCI": {
    "title": "Bitcoin Interest",
    "parent": "BTC",
    "chainparams": {
      "pubKeyHash": 102,
      "scriptHash": 23,
      "forkId": 20224,
      "witness": true
    },
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.bitcoininterest.io/api"
      }
    ],
    "electrum": [
      "wallet.bitcoininterest.io:s50002"
    ]
  },
  "RDD": {
    "title": "ReddCoin",
    "parent": "BTC",
    "slip44": 4,
    "chainparams": {
      "pubKeyHash": 61,
      "scriptHash": 5,
      "wif": 189
    },
    "api": [
      {
        "type": "insight",
        "url": "https://live.reddcoin.com/api"
      }
    ]
  },
  "ZEN": {
    "title": "Horizen",
    "parent": "BTC",
    "slip44": 121,
    "chainparams": {
      "pubKeyHash": 8329,
      "scriptHash": 8342
    },
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.zensystem.io/api"
      }
    ]
  },
  "LEO": {
    "title": "Leocoin",
    "parent": "BTC",
    "chainparams": {
      "pubKeyHash": 18,
      "scriptHash": 88,
      "wif": 144,
      "txdatetime": true
    },
    "api": [
      {
        "type": "insight",
        "url": "https://insight.leocoin.org/api"
      }
    ]
  },
  "BCH": {
    "title": "Bitcoin Cash",
    "parent": "BTC",
    "slip44": 145,
    "forked": [
      {
        "coin": "BTC",
        "height": 478558,
        "timestamp": 1501534800,
        "ratio": "1:1"
      }
    ],
    "chainparams": {
      "addr_prefix": "bitcoincash",
      "forkId": 0
    },
    "api": [
      {
        "type": "insight",
        "url": "https://www.blockdozer.com/insight-api"
      }
    ],
    "electrum": [
      "electroncash.dk:s50002",
      "electrumx-bch.cryptonermal.net:s50002",
      "electrumx-cash.1209k.com:s50002",
      "dedi.jochen-hoenicke.de:s51002",
      "electrum.imaginary.cash:s50002",
      "bab.electrumx.cash:s60002"
    ]
  },
  "BSV": {
    "title": "Bitcoin SV",
    "parent": "BCH",
    "slip44": 236,
    "forked": [
      {
        "coin": "BCH",
        "height": 556766,
        "timestamp": 1542293520,
        "ratio": "1:1"
      }
    ],
    "api": [
      {
        "type": "insight",
        "url": "https://bchsvexplorer.com/api"
      }
    ],
    "electrum": [
      "sv.satoshi.io:s50002",
      "sv2.satoshi.io:s50002",
      "electron.bitcoinsv.io:s50002",
      "electrumx-sv.1209k.com:s50002",
      "sv.jochen-hoenicke.de:s50002",
      "electroncash.cascharia.com:s50002",
      "sv.electrumx.cash:s50002",
      "satoshi.vision.cash:s50002"
    ]
  },
  "BTG": {
    "title": "Bitcoin Gold",
    "parent": "BTC",
    "slip44": 156,
    "forked": [
      {
        "coin": "BTC",
        "height": 491407,
        "timestamp": 1508792400,
        "ratio": "1:1"
      }
    ],
    "chainparams": {
      "pubKeyHash": 38,
      "scriptHash": 23,
      "forkId": 79
    },
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.bitcoingold.org/insight-api"
      }
    ],
    "electrum": [
      "electrumx-eu.bitcoingold.org:s50002",
      "electrumx-us.bitcoingold.org:s50002",
      "electrumx-eu.btcgpu.org:s50002",
      "electrumx-us.btcgpu.org:s51002"
    ]
  },
  "ANON": {
    "parent": "BTC",
    "slip44": 220,
    "forked": [
      {
        "coin": "BTC",
        "height": 540870,
        "timestamp": 1536616749,
        "ratio": "1:1"
      },
      {
        "coin": "ZCL",
        "height": 382307,
        "timestamp": 1536627625,
        "ratio": "1:2"
      }
    ],
    "chainparams": {
      "pubKeyHash": 1410,
      "scriptHash": 21385,
      "forkId": 10752
    },
    "mainnet": 1536875949,
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.anon.zeltrez.io/api"
      }
    ]
  },
  "PPC": {
    "title": "Peercoin",
    "parent": "BTC",
    "decimals": 6,
    "slip44": 6,
    "chainparams": {
      "pubKeyHash": 55,
      "scriptHash": 117,
      "wif": 183,
      "txdatetime": true
    },
    "api": [
      {
        "type": "iquidus",
        "url": "https://explorer.peercoin.net"
      }
    ],
    "electrum": [
      "explorer.peercoin.net:s50002",
      "electrum.peercoinexplorer.net:s50002"
    ]
  },
  "ZEC": {
    "title": "Zcash",
    "parent": "BTC",
    "slip44": 133,
    "chainparams": {
      "pubKeyHash": 7352,
      "scriptHash": 7357,
      "wif": 128,
      "consensusBranchId": {
        "1": 0,
        "2": 0,
        "3": 1537743641,
        "4": 1991772603
      }
    },
    "electrum": [
      "electrum.novit.ro:t50001",
      "35.224.186.7:t50001"
    ]
  },
  "ZCL": {
    "title": "Zclassic",
    "parent": "ZEC",
    "slip44": 147,
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.zcl.zeltrez.io/api"
      }
    ],
    "electrum": [
      "electrum.zclassic.community:s50002",
      "zclele.duckdns.org:s50002"
    ]
  },
  "ZEL": {
    "title": "ZelCash",
    "parent": "ZEC",
    "slip44": 19167,
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.zel.cash/api"
      }
    ]
  },
  "KMD": {
    "title": "Komodo",
    "parent": "ZEC",
    "slip44": 141,
    "chainparams": {
      "pubKeyHash": 60,
      "scriptHash": 5,
      "wif": 188
    },
    "api": [
      {
        "type": "insight",
        "url": "http://kmd.explorer.dexstats.info/insight-api-komodo"
      },
      {
        "type": "insight",
        "url": "https://explorer.komodo.services/api"
      },
      {
        "type": "insight",
        "url": "https://kmdexplorer.io/insight-api-komodo"
      }
    ],
    "electrum": [
      "electrum1.cipig.net:t10001",
      "electrum2.cipig.net:t10001",
      "electrum3.cipig.net:t10001"
    ]
  },
  "ZILLA": {
    "title": "ChainZilla",
    "parent": "KMD"
  },
  "DGB": {
    "title": "DigiByte",
    "parent": "BTC",
    "slip44": 20,
    "chainparams": {
      "pubKeyHash": 30,
      "scriptHash": 5,
      "wif": 128
    },
    "api": [
      {
        "type": "insight",
        "url": "https://digiexplorer.info/api"
      }
    ]
  },
  "LTC": {
    "title": "Litecoin",
    "parent": "BTC",
    "slip44": 2,
    "chainparams": {
      "bech32": "ltc",
      "magic_alternates": {
        "Ltub": {
          "xpub": {
            "public": 27108450,
            "private": 27106558
          },
          "ypub": {
            "public": 28471030,
            "private": 28469138
          }
        }
      },
      "pubKeyHash": 48,
      "scriptHash": 50,
      "wif": 176
    },
    "electrum": [
      "ltc.rentonisk.com:s50002",
      "electrum-ltc.petrkr.net:s60002",
      "electrum-ltc.bysh.me:s50002",
      "electrum.ltc.xurious.com:s50002"
    ]
  },
  "LCC": {
    "title": "Litecoin Cash",
    "parent": "BTC",
    "decimals": 7,
    "slip44": 192,
    "forked": [
      {
        "coin": "LTC",
        "height": 1371111,
        "timestamp": 1518982404,
        "ratio": 1
      }
    ],
    "chainparams": {
      "bech32": "lcc",
      "pubKeyHash": 28,
      "scriptHash": 50,
      "scriptHash2": 5,
      "wif": 176,
      "forkId": 64
    },
    "api": [
      {
        "type": "cryptoid"
      }
    ],
    "electrum": [
      "hetzner01.fischl-online.de:s50010"
    ]
  },
  "DASH": {
    "title": "Dash",
    "parent": "BTC",
    "slip44": 5,
    "chainparams": {
      "pubKeyHash": 76,
      "scriptHash": 16,
      "wif": 204
    },
    "api": [
      {
        "type": "insight",
        "url": "https://insight.dash.org/insight-api"
      }
    ],
    "electrum": [
      "electrum.dash.org:s50002",
      "electrum.masternode.io:s50002",
      "electrum-drk.club:s50002",
      "dashcrypto.space:s50002",
      "drk.p2pay.com:s50002",
      "electrum.dash.siampm.com:s50002"
    ]
  },
  "BTCP": {
    "title": "Bitcoin Private",
    "parent": "BTC",
    "slip44": 183,
    "forked": [
      {
        "coin": "BTC",
        "height": 511346,
        "timestamp": 1519826818,
        "ratio": 1
      },
      {
        "coin": "ZCL",
        "height": 272991,
        "timestamp": 1519837402,
        "ratio": 1
      }
    ],
    "chainparams": {
      "pubKeyHash": 4901,
      "scriptHash": 5039,
      "wif": 128,
      "forkId": 10752
    },
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.btcprivate.org/api"
      }
    ]
  },
  "BCX": {
    "title": "BitcoinX",
    "parent": "BTC",
    "slip44": 1688,
    "decimals": 4,
    "forked": [
      {
        "coin": "BTC",
        "height": 498888,
        "timestamp": 1513074593,
        "ratio": "1:10000"
      }
    ],
    "chainparams": {
      "pubKeyHash": 75,
      "scriptHash": 63,
      "wif": 128,
      "forkId": 16,
      "witness": true
    },
    "api": [
      {
        "type": "insight",
        "url": "https://bcx.info/insight-api"
      }
    ]
  },
  "BTX": {
    "title": "Bitcore",
    "parent": "BTC",
    "slip44": 160,
    "forked": [
      {
        "coin": "BTC",
        "height": 492820,
        "timestamp": 1509643431,
        "ratio": "1:0.5"
      }
    ],
    "chainparams": {
      "bech32": "btx",
      "pubKeyHash": 3,
      "scriptHash": 125,
      "wif": 128
    },
    "api": [
      {
        "type": "insight",
        "url": "https://insight.bitcore.cc/api"
      }
    ],
    "electrum": [
      "ele1.bitcore.cc:s50002",
      "ele2.bitcore.cc:s50002",
      "ele3.bitcore.cc:s50002",
      "ele4.bitcore.cc:s50002"
    ]
  },
  "BSD": {
    "title": "BitSend",
    "parent": "BTC",
    "slip44": 91,
    "chainparams": {
      "pubKeyHash": 102,
      "scriptHash": 5,
      "wif": 204
    },
    "api": [
      {
        "type": "cryptoid"
      }
    ]
  },
  "BTDX": {
    "title": "Bitcloud",
    "parent": "BTC",
    "slip44": 128,
    "chainparams": {
      "pubKeyHash": 25,
      "scriptHash": 5,
      "wif": 153
    },
    "api": [
      {
        "type": "cryptoid"
      }
    ]
  },
  "MEC": {
    "title": "Megacoin",
    "parent": "BTC",
    "slip44": 217,
    "chainparams": {
      "pubKeyHash": 50,
      "scriptHash": 34,
      "wif": 178
    },
    "api": [
      {
        "type": "cryptoid"
      }
    ]
  },
  "MBC": {
    "title": "Micro Bitcoin",
    "parent": "BTC",
    "tickers": {
      "cryptocompare": "MBTC"
    },
    "decimals": 4,
    "forked": [
      {
        "coin": "BTC",
        "height": 525000,
        "timestamp": 1527625482,
        "ratio": 10000
      }
    ],
    "chainparams": {
      "pubKeyHash": 26,
      "scriptHash": 51,
      "wif": 128,
      "forkId": 96
    },
    "api": [
      {
        "type": "mbc",
        "url": "https://api.mbc.wiki"
      }
    ],
    "electrum": [
      "52.78.182.106:t7403",
      "13.57.248.201:t7403"
    ]
  },
  "BZX": {
    "title": "BitcoinZero",
    "parent": "BTC",
    "slip44": 284,
    "chainparams": {
      "pubKeyHash": 75,
      "scriptHash": 34,
      "wif": 210,
      "cointype": 284
    },
    "api": [
      {
        "type": "cryptoid"
      }
    ]
  },
  "GXX": {
    "title": "GravityCoin",
    "parent": "BTC",
    "slip44": 285,
    "chainparams": {
      "pubKeyHash": 40,
      "scriptHash": 10,
      "wif": 210
    },
    "api": [
      {
        "type": "cryptoid"
      }
    ]
  },
  "XBA": {
    "title": "Bitcoin Air",
    "parent": "BTC",
    "decimals": 6,
    "forked": [
      {
        "coin": "BTC",
        "height": 551200,
        "timestamp": 1542987458,
        "ratio": 1
      },
      {
        "coin": "PPC",
        "height": 403400,
        "timestamp": 1544889622,
        "ratio": 20
      }
    ],
    "chainparams": {
      "messagePrefix": "BitcoinAir",
      "pubKeyHash": 75,
      "scriptHash": 117,
      "wif": 203,
      "txdatetime": true
    },
    "api": [
      {
        "type": "iquidus",
        "url": "https://explorer.bitcoinair.net"
      }
    ]
  },
  "GRS": {
    "title": "Groestlcoin",
    "parent": "BTC",
    "slip44": 17,
    "chainparams": {
      "bech32": "grs",
      "pubKeyHash": 36,
      "scriptHash": 5,
      "wif": 128,
      "hash_functions": {
        "address": "groestl",
        "transaction": "hash256"
      }
    },
    "api": [
      {
        "type": "insight",
        "url": "https://groestlsight.groestlcoin.org/api"
      }
    ],
    "electrum": [
      "electrum1.groestlcoin.org:s50002",
      "electrum2.groestlcoin.org:s50002",
      "electrum3.groestlcoin.org:s50002",
      "electrum10.groestlcoin.org:s50002",
      "electrum20.groestlcoin.org:s50002",
      "electrum30.groestlcoin.org:s50002",
      "electrum40.groestlcoin.org:s50002"
    ]
  },
  "VIA": {
    "title": "Viacoin",
    "parent": "BTC",
    "slip44": 14,
    "chainparams": {
      "pubKeyHash": 71,
      "scriptHash": 33,
      "wif": 199
    },
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.viacoin.org/api"
      }
    ]
  },
  "NIX": {
    "parent": "BTC",
    "slip44": 400,
    "chainparams": {
      "pubKeyHash": 38,
      "scriptHash": 53,
      "wif": 128
    },
    "api": [
      {
        "type": "insight",
        "url": "https://blockchain.nixplatform.io/api"
      }
    ]
  },
  "PIVX": {
    "parent": "BTC",
    "slip44": 119,
    "chainparams": {
      "pubKeyHash": 30,
      "scriptHash": 13,
      "wif": 212
    },
    "api": [
      {
        "type": "cryptoid"
      }
    ]
  },
  "FLO": {
    "parent": "BTC",
    "slip44": 216,
    "chainparams": {
      "magic": {
        "xpub": {
          "public": 20201579,
          "private": 20200497
        }
      },
      "pubKeyHash": 35,
      "pubKeyHash2": 94,
      "scriptHash": 8,
      "wif": 163,
      "wif2": 176
    },
    "api": [
      {
        "type": "insight",
        "url": "https://livenet.flocha.in/api"
      }
    ]
  },
  "XZC": {
    "title": "ZCoin",
    "parent": "BTC",
    "slip44": 136,
    "chainparams": {
      "pubKeyHash": 82,
      "scriptHash": 7,
      "wif": 210
    },
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.zcoin.io/api"
      }
    ]
  },
  "XMY": {
    "title": "Myriadcoin",
    "parent": "BTC",
    "slip44": 90,
    "chainparams": {
      "pubKeyHash": 50,
      "scriptHash": 9,
      "wif": 178
    },
    "api": [
      {
        "type": "insight",
        "url": "http://insight-myr.cryptap.us/api"
      }
    ]
  },
  "FTC": {
    "title": "Feathercoin",
    "parent": "BTC",
    "slip44": 8,
    "chainparams": {
      "pubKeyHash": 14,
      "scriptHash": 5,
      "wif": 142
    },
    "api": [
      {
        "type": "insight",
        "url": "https://explorer.feathercoin.com/api"
      }
    ]
  },
  "ECA": {
    "title": "Electra",
    "parent": "BTC",
    "slip44": 249,
    "chainparams": {
      "pubKeyHash": 33,
      "scriptHash": 40,
      "wif": 161
    },
    "api": [
      {
        "type": "iquidus",
        "url": "https://tec.electraproject.org"
      }
    ],
    "electrum": [
      "54.38.53.207:s50002"
    ]
  },
  "DOGE": {
    "title": "Dogecoin",
    "parent": "BTC",
    "slip44": 3,
    "chainparams": {
      "magic": {
        "xpub": {
          "public": 49990397,
          "private": 49988504
        }
      },
      "pubKeyHash": 30,
      "scriptHash": 22,
      "wif": 158
    }
  },
  "MONA": {
    "title": "Monacoin",
    "parent": "BTC",
    "slip44": 22,
    "chainparams": {
      "pubKeyHash": 50,
      "scriptHash": 5,
      "wif": 176
    },
    "api": [
      {
        "type": "insight",
        "url": "https://mona.chainsight.info/api"
      }
    ],
    "electrum": [
      "electrumx2.monacoin.ninja:s50002",
      "electrumx2.tamami-foundation.org:s50002",
      "electrumx1.monacoin.nl:s50002",
      "electrum-mona.bitbank.cc:s50002"
    ]
  },
  "XVG": {
    "title": "Verge",
    "parent": "BTC",
    "slip44": 77,
    "chainparams": {
      "magic": {
        "xpub": {
          "public": 36513075,
          "private": 35729707
        }
      },
      "pubKeyHash": 30,
      "scriptHash": 33,
      "wif": 158
    },
    "api": [
      {
        "type": "iquidus",
        "url": "https://verge-blockchain.info"
      }
    ],
    "electrum": [
      "e1.verge-electrum.com:s50002",
      "e1.verge-electrum.com:t50001",
      "e2.verge-electrum.com:s50002",
      "e2.verge-electrum.com:t50001",
      "e3.verge-electrum.com:s50002",
      "e3.verge-electrum.com:t50001",
      "electrum-verge.xyz:s50002",
      "electrum-verge.xyz:t50001",
      "electrum-xvg.stream:s50002",
      "electrum-xvg.stream:t50001",
      "electrum-xvg.party:s50002",
      "electrum-xvg.party:t50001",
      "xvg.verge-blockchain.info:s50002",
      "xvg.verge-blockchain.info:t50001",
      "83.169.38.218:s50002",
      "83.169.38.218:t50003",
      "46.163.118.201:s50002",
      "elec2.verge-blockchain.com:s50002",
      "91.250.119.239:s50002",
      "94.130.90.213:s50002",
      "94.130.90.213:t50001"
    ]
  },
  "BTH": {
    "title": "Bithereum",
    "parent": "BTC",
    "chainparams": {
      "pubKeyHash": 25,
      "scriptHash": 40,
      "wif": 128
    },
    "api": [
      {
        "type": "insight",
        "url": "http://explorer.bithereum.network/insight-api"
      }
    ]
  },
  "VTC": {
    "title": "Vertcoin",
    "parent": "BTC",
    "slip44": 28,
    "chainparams": {
      "pubKeyHash": 71,
      "scriptHash": 5,
      "wif": 28
    },
    "electrum": [
      "fr1.vtconline.org:s55002",
      "vtc.horriblecoders.com:s55002",
      "vtc.lukechilds.co:s55002",
      "vtc-cce-1.coinomi.net:t5028"
    ]
  },
  "NLG": {
    "title": "Gulden",
    "parent": "BTC",
    "slip44": 87,
    "chainparams": {
      "pubKeyHash": 38,
      "scriptHash": 98,
      "wif": 166
    }
  },
  "QTUM": {
    "title": "Qtum",
    "parent": "BTC",
    "slip44": 2301,
    "chainparams": {
      "pubKeyHash": 58,
      "scriptHash": 50,
      "wif": 128
    },
    "electrum": [
      "s1.qtum.info:s50002",
      "s2.qtum.info:s50002",
      "s3.qtum.info:s50002",
      "s4.qtum.info:s50002",
      "s5.qtum.info:s50002",
      "s7.qtum.info:s50002",
      "s8.qtum.info:s50002",
      "s9.qtum.info:s50002"
    ]
  },
  "NMC": {
    "title": "Namecoin",
    "parent": "BTC",
    "slip44": 7,
    "chainparams": {
      "pubKeyHash": 52,
      "scriptHash": 13,
      "wif": 180
    },
    "electrum": [
      "elec.luggs.co:s446",
      "ulrichard.ch:t50005",
      "ulrichard.ch:s50006",
      "luggscoqbymhvnkp.onion:t82",
      "electrum-nmc.le-space.de:s50002",
      "nmc.bitcoins.sk:s50002"
    ]
  },
  "BCD": {
    "title": "Bitcoin Diamond",
    "parent": "BTC",
    "slip44": 999,
    "forked": [
      {
        "coin": "BTC",
        "height": 495866,
        "timestamp": 1511515212,
        "ratio": 10
      }
    ],
    "chainparams": {
      "txblockhash": true
    },
    "electrum": [
      "seed1.electrum.btcd.io:s50002"
    ]
  }
};

module.exports = coins;