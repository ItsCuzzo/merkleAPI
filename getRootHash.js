const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const addresses = require('./addresses.json');
const hashedAddresses = addresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(hashedAddresses, keccak256, { sortPairs: true });
const rootHash = merkleTree.getRoot().toString('hex');

// Note, you should only include the FINAL root hash in your Solidity smart contract
// after no further changes need to be made to the `addresses.json` file.

console.log(`Root Hash: 0x${rootHash}`);
