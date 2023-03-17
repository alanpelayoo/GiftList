const express = require('express');
const verifyProof = require('../utils/verifyProof');
const MerkleTree = require('../utils/MerkleTree');
const alanList = require('../utils/alanList.json');
const port = 1225;

const app = express();
app.use(express.json());

const merkleTree = new MerkleTree(alanList);
const root = merkleTree.getRoot();

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;
  const inList = verifyProof(body.proof, body.name, root)

  if (inList){
    res.send("yes");
  }else{
    res.send("no");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
