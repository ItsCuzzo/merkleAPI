const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const addresses = require('./addresses.json');
const hashedAddresses = addresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(hashedAddresses, keccak256, { sortPairs: true });
const rootHash = merkleTree.getRoot().toString('hex');

console.log(`Root Hash: 0x${rootHash}`);
