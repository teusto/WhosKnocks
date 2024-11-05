const { ethers } = require('ethers');
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = process.env.CONTRACT_ADDRESS;
const abi = [
    // Add the ABI of the Identity contract here
    "function registerUser(bytes32 name, bytes32 role) public",
    "function getUser(address user) public view returns (address, bytes32, bytes32, bool)",
    "function assignRole(address user, bytes32 newRole) public",
    "function deactivateUser(address user) public"
];
const contract = new ethers.Contract(contractAddress, abi, wallet);

module.exports = contract;