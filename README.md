# NFT-MarketPlace

This is a fullstack project of building an NFT Marketplace using Next.js, Tailwind, Solidity, Hardhat

* The web application framework is handled by Next.js
* We are using Tailwind CSS for frontend
* Hardhat is the solidity development environment used
* Additionally Ethers.js serves as a Ethereum Web Client Library 

## Project Description

The project is a Metaverse Marketplace - an NFT marketplace.

![NFT](assets/lx8avrmuwqswx9roub2g.jpeg)

When a user puts an NFT for sale, the ownership of the item will be transferred from the creator to the marketplace contract.

When a user purchases an NFT, the purchase price will be transferred from the buyer to the seller and the item will be transferred from the marketplace to the buyer.

The marketplace owner will be able to set a listing fee. This fee will be taken from the seller and transferred to the contract owner upon completion of any sale, enabling the owner of the marketplace to earn recurring revenue from any sale transacted in the marketplace.

The marketplace logic will consist of just one smart contract built using Solidity. 

## Local setup 

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/sarrah-basta/OSC-Marketplace.git 

cd OSC-Marketplace

# install using NPM or Yarn
npm install

```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
npm run dev
```
