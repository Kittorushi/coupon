# Authenticator Dapp

This repository contains the code for creating an Authenticator Dapp using React as the front-end, Solidity for creating the smart contract, and Truffle for compiling, testing, and deployment.

## Prerequisites

Before starting with this project, ensure you have the following installed:

- [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation)
- [React](https://reactjs.org/docs/getting-started.html)
- [Web3.js](https://web3js.readthedocs.io/en/v1.3.0/getting-started.html)
- [npm](https://www.npmjs.com/get-npm)
- A [Metamask](https://metamask.io/) account and secret phrase
- An [Infura](https://infura.io/) account and API key
- Truffle, React, Web3 Lib, and npm must be installed.
- You must have a Metamask account with a secret phrase.
- You must have an Infura account with an API key.

## Steps to Create the Authenticator Dapp

### Step I:

1. Create a new Truffle project using the command `truffle init`.
2. Write your Solidity contract in the contracts folder.
3. Write the deployment script in the migrations folder with the name 2_deploy_contracts.js.
4. Compile the contracts by running `truffle compile`.
5. Edit the `truffle-config.js` file with your Infura API key and secret phrase, as shown in the Step Extra below.
6. Deploy the contract to the network using `truffle migrate --network sepolia`.
7. Make sure you have Sepolia ETH in your Metamask wallet to avoid errors.
8. Note the contract address and ABI file in the builds folder.

#### Step Extra: Deployment

To deploy the Dapp, follow these steps:

Edit `truffle-config.js` as follows:

```
const MNEMONIC = 'Your Secret Phrase';
const INFURA_API_KEY = 'Your API key from INFURA Project';
const HDWalletProvider = require('@truffle/hdwallet-provider');
networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://sepolia.infura.io/v3/${INFURA_API_KEY}`),
      network_id: '11155111',
      gas: 4565030   //make sure this gas allocation isn't over 4M, which is the max
    }
},
```

### Step II: - Setting up React

1. Create a new React app using the following commands:
   - `npx create-react-app my-app`
   - `cd my-app`
   - `npm start`
2. Copy the ABI file into the React project structure.
3. Write the code to call the contract JSON file (ABI file) into App.js.
4. Run `npm start` to see the Authenticator Dapp in action.

## Conclusion

Congratulations! You have successfully created and deployed the Authenticator Dapp.
