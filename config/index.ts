import { NetworkUserConfig } from "hardhat/types";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

const dotenvConfigPath: string = process.env.DOTENV_CONFIG_PATH || "../.env";
dotenvConfig({ path: resolve(__dirname, dotenvConfigPath) });

export const PRIVATE_KEY: string = process.env.PRIVATE_KEY || "";
if (!PRIVATE_KEY) {
  throw new Error("Private key is missing from the .env file. Aborting...");
}

export const INFURA_API_KEY: string | undefined = process.env.INFURA_API_KEY;
if (!INFURA_API_KEY) {
  throw new Error("Infura API Key is missing from the .env file. Aborting...");
}

export const FORKING_BLOCK_NUMMBER: number = 42369566;
export const POLYGONSCAN_API_KEY: string = process.env.POLYGONSCAN_API_KEY || "";
export const ETHERSCAN_API_KEY: string = process.env.ETHERSCAN_API_KEY || "";

interface networkConfig {
  live: boolean;
  chainId: number;
  rpcUrl: string;
}

const networksConfig: Record<string, networkConfig> = {
  mainnet: {
    live: true,
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  sepolia: {
    live: true,
    chainId: 11155111,
    rpcUrl: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
  },
  polygon: {
    live: true,
    chainId: 137,
    rpcUrl: `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
  mumbai: {
    live: true,
    chainId: 80001,
    rpcUrl: `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`,
  },
};

export const getNetworkConfig = (network: keyof typeof networksConfig): NetworkUserConfig => {
  const networkConfig = networksConfig[network];
  return {
    accounts: [PRIVATE_KEY],
    /* accounts: {
        count: 10,
        mnemonic: MNEMONIC,
        path: "m/44'/60'/0'/0",
      }, */
    chainId: networkConfig.chainId,
    url: networkConfig.rpcUrl,
  };
};
