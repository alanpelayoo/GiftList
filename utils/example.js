const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const alanList = require('./alanList');
const verifyProof = require('./verifyProof');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(alanList);

// get the root
const root = merkleTree.getRoot();

// find the proof that Alan Pelayo is in the list.
const name = 'Alan Pelayo';
console.log("root",root)

const index = alanList.findIndex(n => n === name);
const proof = merkleTree.getProof(index);
console.log(`Proof for ${name}`,proof)

// verify proof against the Merkle Root
console.log("Proof", verifyProof(proof, name, root) );
