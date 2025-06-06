"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/data/chain.ts
var chain_exports = {};
__export(chain_exports, {
  default: () => chain_default
});
module.exports = __toCommonJS(chain_exports);
var chainData = [
  {
    "chainId": 1,
    "name": "Ethereum",
    "icon": {
      "light": "icons/chain/ethereum.light.svg",
      "dark": "icons/chain/ethereum.dark.svg"
    },
    "explorer": "https://etherscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 17e3,
        "name": "Holesky",
        "icon": {
          "light": "icons/chain/ethereum.light.svg",
          "dark": "icons/chain/ethereum.dark.svg"
        },
        "explorer": "https://holesky.etherscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 2714,
    "name": "Abstract",
    "icon": {
      "light": "icons/chain/abstract.light.svg",
      "dark": "icons/chain/abstract.dark.svg"
    },
    "explorer": "https://abscan.org/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 11124,
        "name": "Abstract",
        "icon": {
          "light": "icons/chain/abstract.light.svg",
          "dark": "icons/chain/abstract.dark.svg"
        },
        "explorer": "https://sepolia.abscan.org/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 43114,
    "name": "Avalanche C-Chain",
    "icon": {
      "light": "icons/chain/avalanche.light.svg",
      "dark": "icons/chain/avalanche.dark.svg"
    },
    "explorer": "https://snowscan.xyz/",
    "nativeCurrency": {
      "name": "Avalanche",
      "symbol": "AVAX",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 43113,
        "name": "Avalanche Fuji Testnet",
        "icon": {
          "light": "icons/chain/avalanche.light.svg",
          "dark": "icons/chain/avalanche.dark.svg"
        },
        "explorer": "https://testnet.snowscan.xyz/",
        "nativeCurrency": {
          "name": "Avalanche",
          "symbol": "AVAX",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 42161,
    "name": "Arbitrum",
    "icon": {
      "light": "icons/chain/arbitrum.light.svg",
      "dark": "icons/chain/arbitrum.dark.svg"
    },
    "explorer": "https://arbiscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 421614,
        "name": "Arbitrum Sepolia",
        "icon": {
          "light": "icons/chain/arbitrum.light.svg",
          "dark": "icons/chain/arbitrum.dark.svg"
        },
        "explorer": "https://sepolia.arbiscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 8453,
    "name": "Base",
    "icon": {
      "light": "icons/chain/base.light.svg",
      "dark": "icons/chain/base.dark.svg"
    },
    "explorer": "https://basescan.org",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 84532,
        "name": "Base Sepolia Testnet",
        "icon": {
          "light": "icons/chain/base.light.svg",
          "dark": "icons/chain/base.dark.svg"
        },
        "explorer": "https://sepolia.basescan.org/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 80094,
    "name": "Berachain",
    "icon": {
      "light": "icons/chain/berachain.light.svg",
      "dark": "icons/chain/berachain.dark.svg"
    },
    "explorer": "https://berascan.com/",
    "nativeCurrency": {
      "name": "BERA",
      "symbol": "BERA",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 80069,
        "name": "Berachain Bepolia",
        "icon": {
          "light": "icons/chain/berachain.light.svg",
          "dark": "icons/chain/berachain.dark.svg"
        },
        "explorer": "https://bepolia.beratrail.io/",
        "nativeCurrency": {
          "name": "BERA",
          "symbol": "BERA",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 81457,
    "name": "Blast",
    "icon": {
      "light": "icons/chain/blast.light.svg",
      "dark": "icons/chain/blast.dark.svg"
    },
    "explorer": "https://blastscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 168587773,
        "name": "Blast Sepolia Testnet",
        "icon": {
          "light": "icons/chain/blast.light.svg",
          "dark": "icons/chain/blast.dark.svg"
        },
        "explorer": "https://testnet.blastscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 60808,
    "name": "BOB",
    "icon": {
      "light": "icons/chain/bob.light.svg",
      "dark": "icons/chain/bob.dark.svg"
    },
    "explorer": "https://explorer.gobob.xyz/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 808813,
        "name": "BOB Sepolia",
        "icon": {
          "light": "icons/chain/bob.light.svg",
          "dark": "icons/chain/bob.dark.svg"
        },
        "explorer": "https://bob-sepolia.explorer.gobob.xyz/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 56,
    "name": "BNB",
    "icon": {
      "light": "icons/chain/bsc.light.svg",
      "dark": "icons/chain/bsc.dark.svg"
    },
    "explorer": "https://bscscan.com/",
    "nativeCurrency": {
      "name": "bnb",
      "symbol": "BNB",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 97,
        "name": "BNB Testnet",
        "icon": {
          "light": "icons/chain/bob.light.svg",
          "dark": "icons/chain/bob.dark.svg"
        },
        "explorer": "https://testnet.bscscan.com/",
        "nativeCurrency": {
          "name": "bnb",
          "symbol": "BNB",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 42220,
    "name": "Celo",
    "icon": {
      "light": "icons/chain/celo.light.svg",
      "dark": "icons/chain/celo.dark.svg"
    },
    "explorer": "https://celoscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 44787,
        "name": "Celo Alfajores",
        "icon": {
          "light": "icons/chain/celo.light.svg",
          "dark": "icons/chain/celo.dark.svg"
        },
        "explorer": "https://alfajores.celoscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 252,
    "name": "Fraxtal",
    "icon": {
      "light": "icons/chain/fraxtal.light.svg",
      "dark": "icons/chain/fraxtal.dark.svg"
    },
    "explorer": "https://fraxscan.com",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 2522,
        "name": "Fraxtal Testnet",
        "icon": {
          "light": "icons/chain/fraxtal.light.svg",
          "dark": "icons/chain/fraxtal.dark.svg"
        },
        "explorer": "https://holesky.fraxscan.com/",
        "nativeCurrency": {
          "name": "Frax",
          "symbol": "FRAX",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 100,
    "name": "Gnosis",
    "icon": {
      "light": "icons/chain/gnosis.light.svg",
      "dark": "icons/chain/gnosis.dark.svg"
    },
    "explorer": "https://gnosisscan.io",
    "nativeCurrency": {
      "name": "xDai",
      "symbol": "xDai",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 10200,
        "name": "Gnosis Chiado Testnet",
        "icon": {
          "light": "icons/chain/gnosis.light.svg",
          "dark": "icons/chain/gnosis.dark.svg"
        },
        "explorer": "https://gnosis-chiado.blockscout.com/",
        "nativeCurrency": {
          "name": "xDai",
          "symbol": "xDai",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 999,
    "name": "Hyperliquid",
    "icon": {
      "light": "icons/chain/hyperliquid.light.svg",
      "dark": "icons/chain/hyperliquid.dark.svg"
    },
    "explorer": "https://purrsec.com/",
    "nativeCurrency": {
      "name": "Hyper",
      "symbol": "HYPE",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 998,
        "name": "Gnosis Chiado Testnet",
        "icon": {
          "light": "icons/chain/gnosis.light.svg",
          "dark": "icons/chain/gnosis.dark.svg"
        },
        "explorer": "https://https://testnet.purrsec.com/",
        "nativeCurrency": {
          "name": "Hyper",
          "symbol": "HYPE",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 57073,
    "name": "Ink",
    "icon": {
      "light": "icons/chain/lens.light.svg",
      "dark": "icons/chain/lens.dark.svg"
    },
    "explorer": "https://explorer.inkonchain.com",
    "nativeCurrency": {
      "name": "ETH",
      "symbol": "Ether",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 763373,
        "name": "Ink Sepolia",
        "icon": {
          "light": "icons/chain/lens.light.svg",
          "dark": "icons/chain/lens.dark.svg"
        },
        "explorer": "https://explorer-sepolia.inkonchain.com/",
        "nativeCurrency": {
          "name": "ETH",
          "symbol": "Ether",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 232,
    "name": "Lens",
    "icon": {
      "light": "icons/chain/lens.light.svg",
      "dark": "icons/chain/lens.dark.svg"
    },
    "explorer": "https://explorer.lens.xyz/",
    "nativeCurrency": {
      "name": "GHO",
      "symbol": "GHO",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 37111,
        "name": "Lens Chain Testnet",
        "icon": {
          "light": "icons/chain/lens.light.svg",
          "dark": "icons/chain/lens.dark.svg"
        },
        "explorer": "https://explorer.testnet.lens.xyz",
        "nativeCurrency": {
          "name": "Grass",
          "symbol": "GRASS",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 59144,
    "name": "Linea",
    "icon": {
      "light": "icons/chain/linea.light.svg",
      "dark": "icons/chain/linea.dark.svg"
    },
    "explorer": "https://lineascan.build/",
    "nativeCurrency": {
      "name": "ETH",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 59141,
        "name": "Linea Sepolia",
        "icon": {
          "light": "icons/chain/linea.light.svg",
          "dark": "icons/chain/linea.dark.svg"
        },
        "explorer": "https://sepolia.lineascan.build/",
        "nativeCurrency": {
          "name": "ETH",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 1135,
    "name": "Lisk",
    "icon": {
      "light": "icons/chain/lisk.light.svg",
      "dark": "icons/chain/lisk.dark.svg"
    },
    "explorer": "https://blockscout.lisk.com/",
    "nativeCurrency": {
      "name": "ETH",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 4202,
        "name": "Lisk Sepolia Testnet",
        "icon": {
          "light": "icons/chain/lisk.light.svg",
          "dark": "icons/chain/lisk.dark.svg"
        },
        "explorer": "https://sepolia-blockscout.lisk.com/",
        "nativeCurrency": {
          "name": "ETH",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 5e3,
    "name": "Mantle",
    "icon": {
      "light": "icons/chain/mantle.light.svg",
      "dark": "icons/chain/mantle.dark.svg"
    },
    "explorer": "https://mantlescan.xyz",
    "nativeCurrency": {
      "name": "Mantle",
      "symbol": "MNT",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 5003,
        "name": "Mantle Sepolia Testnet",
        "icon": {
          "light": "icons/chain/mantle.light.svg",
          "dark": "icons/chain/mantle.dark.svg"
        },
        "explorer": "https://explorer.sepolia.mantle.xyz/",
        "nativeCurrency": {
          "name": "Mantle",
          "symbol": "MNT",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 1750,
    "name": "Metal",
    "icon": {
      "light": "icons/chain/mantle.light.svg",
      "dark": "icons/chain/mantle.dark.svg"
    },
    "explorer": "https://explorer.metall2.com/",
    "nativeCurrency": {
      "name": "ETH",
      "symbol": "Ether",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 1740,
        "name": "Metal L2 Testnet",
        "icon": {
          "light": "icons/chain/mantle.light.svg",
          "dark": "icons/chain/mantle.dark.svg"
        },
        "explorer": "https://testnet.explorer.metall2.com/",
        "nativeCurrency": {
          "name": "ETH",
          "symbol": "Ether",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 1088,
    "name": "Metis",
    "icon": {
      "light": "icons/chain/metis.light.svg",
      "dark": "icons/chain/metis.dark.svg"
    },
    "explorer": "https://andromeda-explorer.metis.io",
    "nativeCurrency": {
      "name": "Metis",
      "symbol": "METIS",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 588,
        "name": "Metis Sepolia Testnet",
        "icon": {
          "light": "icons/chain/metis.light.svg",
          "dark": "icons/chain/metis.dark.svg"
        },
        "explorer": "https://sepolia-explorer.metisdevops.link/",
        "nativeCurrency": {
          "name": "Metis",
          "symbol": "METIS",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 34443,
    "name": "Mode",
    "icon": {
      "light": "icons/chain/mode.light.svg",
      "dark": "icons/chain/mode.dark.svg"
    },
    "explorer": "https://modescan.io/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 919,
        "name": "Mode Testnet",
        "icon": {
          "light": "icons/chain/mode.light.svg",
          "dark": "icons/chain/mode.dark.svg"
        },
        "explorer": "https://testnet.modescan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 137,
    "name": "Polygon",
    "icon": {
      "light": "icons/chain/polygon.light.svg",
      "dark": "icons/chain/polygon.dark.svg"
    },
    "explorer": "https://polygonscan.com",
    "nativeCurrency": {
      "name": "Polygon",
      "symbol": "POL",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 80002,
        "name": "Amoy",
        "icon": {
          "light": "icons/chain/polygon.light.svg",
          "dark": "icons/chain/polygon.dark.svg"
        },
        "explorer": "http://amoy.polygonscan.com/",
        "nativeCurrency": {
          "name": "Polygon",
          "symbol": "POL",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 10,
    "name": "Optimism",
    "icon": {
      "light": "icons/chain/optimism.light.svg",
      "dark": "icons/chain/optimism.dark.svg"
    },
    "explorer": "https://optimistic.etherscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 11155420,
        "name": "OP Sepolia Testnet",
        "icon": {
          "light": "icons/chain/optimism.light.svg",
          "dark": "icons/chain/optimism.dark.svg"
        },
        "explorer": "http://sepolia-optimism.etherscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 534352,
    "name": "Scroll",
    "icon": {
      "light": "icons/chain/scroll.light.svg",
      "dark": "icons/chain/scroll.dark.svg"
    },
    "explorer": "https://scrollscan.com",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 534351,
        "name": "Scroll Sepolia Testnet",
        "icon": {
          "light": "icons/chain/scroll.light.svg",
          "dark": "icons/chain/scroll.dark.svg"
        },
        "explorer": "https://sepolia.scrollscan.com/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 1329,
    "name": "Sei",
    "icon": {
      "light": "icons/chain/sei.light.svg",
      "dark": "icons/chain/sei.dark.svg"
    },
    "explorer": "https://seitrace.com/?chain=pacific-1",
    "nativeCurrency": {
      "name": "Sei",
      "symbol": "SEI",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 1328,
        "name": "Sei Testnet",
        "icon": {
          "light": "icons/chain/sei.light.svg",
          "dark": "icons/chain/sei.dark.svg"
        },
        "explorer": "https://seitrace.com/?chain=atlantic-2",
        "nativeCurrency": {
          "name": "Sei",
          "symbol": "SEI",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 1868,
    "name": "Soneium",
    "icon": {
      "light": "icons/chain/soneium.light.svg",
      "dark": "icons/chain/soneium.dark.svg"
    },
    "explorer": "https://soneium.blockscout.com/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 1946,
        "name": "Soneium Testnet Minato",
        "icon": {
          "light": "icons/chain/soneium.light.svg",
          "dark": "icons/chain/soneium.dark.svg"
        },
        "explorer": "https://soneium-minato.blockscout.com/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 146,
    "name": "Sonic",
    "icon": {
      "light": "icons/chain/sonic.light.svg",
      "dark": "icons/chain/sonic.dark.svg"
    },
    "explorer": "https://sonicscan.org/",
    "nativeCurrency": {
      "name": "Sonic",
      "symbol": "S",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 57054,
        "name": "Sonic Testnet",
        "icon": {
          "light": "icons/chain/sonic.light.svg",
          "dark": "icons/chain/sonic.dark.svg"
        },
        "explorer": "https://testnet.sonicscan.org/",
        "nativeCurrency": {
          "name": "Sonic",
          "symbol": "S",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 146,
    "name": "Swell Chain",
    "icon": {
      "light": "icons/chain/swellchain.light.svg",
      "dark": "icons/chain/swellchain.dark.svg"
    },
    "explorer": "https://explorer.swellnetwork.io/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 1924,
        "name": "Swellchain Testnet",
        "icon": {
          "light": "icons/chain/swellchain.light.svg",
          "dark": "icons/chain/swellchain.dark.svg"
        },
        "explorer": "https://swell-testnet-explorer.alt.technology/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 167e3,
    "name": "Taiko",
    "icon": {
      "light": "icons/chain/taiko.light.svg",
      "dark": "icons/chain/taiko.dark.svg"
    },
    "explorer": "https://taikoscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 167009,
        "name": "Taiko Hekla",
        "icon": {
          "light": "icons/chain/taiko.light.svg",
          "dark": "icons/chain/taiko.dark.svg"
        },
        "explorer": "https://hekla.taikoscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 130,
    "name": "Unichain",
    "icon": {
      "light": "icons/chain/unichain.light.svg",
      "dark": "icons/chain/unichain.dark.svg"
    },
    "explorer": "https://uniscan.xyz/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 1301,
        "name": "Unichain Sepolia Testnet",
        "icon": {
          "light": "icons/chain/unichain.light.svg",
          "dark": "icons/chain/unichain.dark.svg"
        },
        "explorer": "https://sepolia.uniscan.xyz/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 480,
    "name": "Worldchain",
    "icon": {
      "light": "icons/chain/unichain.light.svg",
      "dark": "icons/chain/unichain.dark.svg"
    },
    "explorer": "https://worldscan.org/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 4801,
        "name": "World Chain Sepolia Testnet",
        "icon": {
          "light": "icons/chain/unichain.light.svg",
          "dark": "icons/chain/unichain.dark.svg"
        },
        "explorer": "https://sepolia.worldscan.org/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 324,
    "name": "zkSync",
    "icon": {
      "light": "icons/chain/zksync.light.svg",
      "dark": "icons/chain/zksync.dark.svg"
    },
    "explorer": "https://explorer.zksync.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 300,
        "name": "ZKsync Sepolia Testnet",
        "icon": {
          "light": "icons/chain/zksync.light.svg",
          "dark": "icons/chain/zksync.dark.svg"
        },
        "explorer": "https://sepolia-era.zksync.network/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 7777777,
    "name": "Zora",
    "icon": {
      "light": "icons/chain/zora.light.svg",
      "dark": "icons/chain/zora.dark.svg"
    },
    "explorer": "https://explorer.zora.energy/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 999999999,
        "name": "Zora Sepolia Testnet",
        "icon": {
          "light": "icons/chain/zora.light.svg",
          "dark": "icons/chain/zora.dark.svg"
        },
        "explorer": "https://sepolia.explorer.zora.energy/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  }
];
var chain_default = chainData;
