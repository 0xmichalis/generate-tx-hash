const keccak256 = require('keccak256'); // Ensure you install this library with npm if needed

async function generateTxHash(txObject) {
    let hash = `none`;
    while (!hash.startsWith("0000")) {
        txObject.maxFeePerGas = txObject.maxFeePerGas + 1;
        const signed = await account.wallet().signTransaction(txObject);
        hash = keccak256(signed).toString('hex');
    }
    console.log(`-> Found ${hash}:`);
    console.log(txObject);
    return hash;
}

module.exports = generateTxHash;
