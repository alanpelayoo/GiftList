const { keccak256 } = require('ethereum-cryptography/keccak');
const { bytesToHex, utf8ToBytes } = require('ethereum-cryptography/utils');

// Final approach
//console.log(bytesToHex(keccak256(utf8ToBytes("abc"))))

// Uint8Array Example of abcd, Uint8Array(4) [ 97, 98, 99, 100 ]
// keccak256 returns a Uint8Array(32) by default

const leaves = ['alan', 'ale']

const ret = leaves.map(utf8ToBytes).map(keccak256)
console.log(bytesToHex(ret[0]))