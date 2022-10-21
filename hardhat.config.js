require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-truffle5");

require('dotenv').config()

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const GOERLI_ALCHEMY_KEY = process.env.GOERLI_AK
const MUMBAI_ALCHEMY_KEY = process.env.MUMBAI_AK

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    mainnet: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        accounts: [process.env.WALLET_PRIVATE_KEY]
    },
    goerli: {
        url: `https://eth-goerli.g.alchemy.com/v2/${GOERLI_ALCHEMY_KEY}`,
        accounts: [process.env.WALLET_PRIVATE_KEY]
    },
    mumbai: {
        url: `https://polygon-mumbai.g.alchemy.com/v2/${MUMBAI_ALCHEMY_KEY}`,
        gasPrice: 35000000000,
        saveDeployments: true,
        accounts: [process.env.WALLET_PRIVATE_KEY]
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 70000
  }
};