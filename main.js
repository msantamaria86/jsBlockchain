const {Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('220a6ecbad11b36dcdff5f2ebca772fed0e35a090681c15f92d63dd5732b54da')
const myWalletAddress = myKey.getPublic('hex')

let test = new Blockchain()

const tx1 = new Transaction(myWalletAddress, '0x12345', 10)
tx1.signTransaction(myKey)
test.addTransaction(tx1)

console.log('starting miner');
test.minePendingTransactions(myWalletAddress)


console.log('Balance is:', test.getBalanceOfAddress(myWalletAddress));

// test.chain[1].transactions[0].amount = 1

console.log('is chain valid?', test.isChainValid())
