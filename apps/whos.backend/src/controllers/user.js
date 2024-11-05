const { exec } = require('child_process');
const contract = require('../utils/contract');
const ethers = require('ethers');

exports.registerUser = async (req, res) => {
    try {
        const { name, role } = req.body;
        const nameHash = ethers.utils.formatBytes32String(name);
        const roleHash = ethers.utils.formatBytes32String(role);

        const tx = await contract.registerUser(nameHash, roleHash);
        await tx.wait();
        
        res.json({ message: 'User registered successfully', txHash: tx.hash });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error registering user', error });
    }
}

exports.getUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving user', error });
    }
}

exports.generateProof = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error generating proof', error });
    }
}