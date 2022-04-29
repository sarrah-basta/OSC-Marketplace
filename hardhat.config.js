require("@nomiclabs/hardhat-waffle");
const projectId = "a972b71cb9e54ec7bb8f4e703e9ee6cf"


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
    },
    mainnet: {
      url:`https://polygon-mainnet.infura.io/v3/${projectId}`,
    },
  
  },
  solidity: "0.8.4",
};
