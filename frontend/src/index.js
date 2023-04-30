// Import the web3 library
import Web3 from 'web3';

// Initialize the web3 provider with MetaMask
const web3 = new Web3(window.ethereum);

// Import the contract ABI and address
import contractAbi from './truffleProject/build/contracts/Authenticator.json';
const contractAddress = '0x9c3f3227E9396782D05837f95be5219B8eD369F0';

// Initialize the contract instance
const contractInstance = new web3.eth.Contract(contractAbi.abi, contractAddress);

// Get the connect wallet button from the HTML form
// const connectWalletButton = document.getElementById('connect-wallet');


async function callFun() {
    const elem = document.getElementById("connect-wallet");

    // elem.style.color = newColor;
}

// Add an event listener to the connect wallet button
// connectWalletButton.addEventListener('click', async () => {
//     console.log("Testwork")
//     try {
//         // Request the user's wallet address
//         const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         // Call the contract's authorize function with the user's wallet address
//         await contractInstance.methods.authorize(account).send({ from: account });
//         // Check if the user is authorized
//         const isAuthorized = await contractInstance.methods.isAuthorized().call({ from: account });
//         // Display a message indicating whether the user is authorized or not
//         const message = isAuthorized ? 'You are authorized!' : 'You are not authorized.';
//         alert(message);
//     } catch (error) {
//         console.error(error);
//         alert('Failed to connect to wallet.');
//     }
// });

