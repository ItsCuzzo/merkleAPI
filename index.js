const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const addresses = require('./addresses.json');
const hashedAddresses = addresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(hashedAddresses, keccak256, { sortPairs: true });

exports.handler = async (event) => {
    
    const [_, address] = event.path.split("/");
    const hashedAddress = keccak256(address);
    const proof = merkleTree.getHexProof(hashedAddress);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(proof)
    };
    
    return response;
};