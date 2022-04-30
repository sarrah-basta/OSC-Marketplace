require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const projectId = "a972b71cb9e54ec7bb8f4e703e9ee6cf"


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    //currently only running on localhost
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
