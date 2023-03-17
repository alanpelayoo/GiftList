const axios = require('axios');
const serverUrl = 'http://localhost:1225';


const proof = [
  {
    data: '10c6208250d8e281a8e124ba60a942a59e939cf0c94d0a332dc307626319cdc9',
    left: false
  },
  {
    data: '1e6eb2a99d6d38266b47bddc73d707c0400759ddb2edd1df0d5fba63e1d9b792',
    left: false
  }
]

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name:"Alan Pelayo",
    proof
  });

  console.log({ gift });
}

main();
// Santa's List, prove Santa that ur in the good kids lits.
// Pre christmas ask the elfs for ur proof, so you have ur note, with ur proof path and 
// name, ready for christmas day.