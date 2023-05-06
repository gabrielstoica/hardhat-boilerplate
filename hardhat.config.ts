import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import { HardhatUserConfig } from "hardhat/config";

import {
  ETHERSCAN_API_KEY,
  FORKING_BLOCK_NUMMBER,
  INFURA_API_KEY,
  POLYGONSCAN_API_KEY,
  getNetworkConfig,
} from "./config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      live: false,
      chainId: 31337,
      // https://hardhat.org/hardhat-network/docs/guides/forking-other-networks
      forking: {
        url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
        blockNumber: FORKING_BLOCK_NUMMBER,
        enabled: false,
      },
    },
    localhost: {
      live: false,
      chainId: 31337,
    },
    mainnet: getNetworkConfig("mainnet"),
    polygon: getNetworkConfig("polygon"),
    sepolia: getNetworkConfig("sepolia"),
    mumbai: getNetworkConfig("mumbai"),
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  // https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY,
      sepolia: ETHERSCAN_API_KEY,
      polygon: POLYGONSCAN_API_KEY,
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100000,
      },
    },
  },
};

export default config;
