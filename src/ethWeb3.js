const Web3 = require('web3');

class EthWeb3 {
    web3;address;
    constructor(url, prikey) {
        this.web3 = new Web3(url);
        this.addPrivateKey(prikey);
        window.web3 = this.web3;
    }
    ContractAt(abi, address) {
        const contract = new this.web3.eth.Contract(abi, address, {from:this.address});
        contract.handleRevert = true; // https://web3js.readthedocs.io/en/v1.3.4/web3-eth-contract.html#handlerevert
        return contract;
    }
    ContractDeploy(abi, code, _arguments) {
        return this.ContractAt(abi).deploy({
            data:code, 
            arguments:_arguments
        });
    }
    async sendTx(tx, gas) {
        if(!gas){
            gas = await tx.estimateGas();
        }
        return tx.send({gas})
    }
    async getSignedTx(tx, gasPrice, nonce, value = 0) {
        if(!this.chainID)
            this.chainID = await this.web3.eth.getChainId();
        const acc = this.web3.eth.accounts.wallet[0];
        //const gas = await tx.estimateGas();
        const gas = 30000;
        return acc.signTransaction({
            from: tx._parent.options.from,
            to: tx._parent._address,
            gasPrice,
            gas: gas+30000,
            value,
            data: tx.encodeABI(),
            nonce,
            chainId: this.chainID
        });
    }
    sendSignedTx(tx,batch=undefined){
        if(batch==undefined)
            return this.web3.eth.sendSignedTransaction(tx.rawTransaction);
        batch.add(this.web3.eth.sendSignedTransaction.request(tx.rawTransaction));
    }
    addPrivateKey(prikey) {
        const acc = this.web3.eth.accounts.privateKeyToAccount(prikey);
        this.web3.eth.accounts.wallet.add(acc);
        this.address = acc.address;
    }
    getGasPrice() {
        return this.web3.eth.getGasPrice();
    }
}


module.exports = {EthWeb3}