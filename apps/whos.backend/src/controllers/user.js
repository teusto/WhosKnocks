const snarkjs = require("snarkjs");
const contract = require('../utils/contract');
const ethers = require('ethers');

const verificationKey = require("../circuits/verification_key.json");

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
        const { userRoleHash, targetRoleHash } = req.body;

        // Path to the generated wasm and zkey files
        const wasmPath = path.join(__dirname, "../");
        const zkeyPath = path.join(__dirname, "../circuits/role_verification_final.zkey");

        // Generate witness file
        const input = {
            userRoleHash,
            targetRoleHash
        };

        // Run witness generation
        const witness = await snarkjs.wtns.calculate(input, wasmPath);

        // Generate proof
        const proofData = await snarkjs.groth16.prove(zkeyPath, witness);
        const { proof, publicSignals } = proofData;

        res.json({
            proof,
            publicSignals
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error generating proof', error });
    }
}

exports.verifyProof = async (req, res) => {
    try {
        const { proof, publicSignals } = req.body;

        const isValid = await snarkjs.groth16.verify(verificationKey, publicSignals, proof);

        res.json({
            valid: isValid
        });
    } catch (error) {
        console.error("Error verifying proof:", error);
        res.status(500).json({ message: "Error verifying proof:", error });
    }
}