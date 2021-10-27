<template>
    <div id="app">
        <div>版本更新: 2021年10月27日23:47:35</div>
        <b-form-select
            v-model="selected"
            @change="switchChain"
            :options="options"
            :disabled="lockOpt"
        ></b-form-select>
        <div>
            节点:
            <b-input v-model="nodeurl" :disabled="lockOpt" />
            Token:
            <b-input v-model="tokenAddress" :disabled="lockOpt" />
            私钥:
            <b-input v-model="prikey" type="password" :disabled="lockOpt" placeholder="尽量使用一次性账户" />
            <span>账户地址:{{ account }}</span>
            <br />
            <span>账户余额:{{ balanceOf }}</span>
            <br/>
            空投文件(.xlxs):
            要求第一列地址，第二列数量，仅支持18位小数。
            <b-file
                @input="upload"
                plain
                :disabled="busy || selected == null || !prikey"
            />
            <div v-if="transList.length">
            <span>空投地址数: {{ txCount }}</span>
            <br/>
            <span>空投币总数: {{ totalCoin }}</span>
            <br/>
            <b-button  @click="airDrop" :disabled="busy"
                >执行空投</b-button
            >
            </div>
            <b-tabs content-class="mt-3">
                <b-tab
                    v-for="(sheet, index) in transList"
                    :key="index"
                    :title="sheet.name"
                >
                    <b-table
                        striped
                        small
                        :items="sheet.items"
                        :fields="fields"
                    ></b-table>
                </b-tab>
            </b-tabs>
        </div>
          <b-modal id="message">
            <p class="my-4">{{ message }}</p>
          </b-modal>
    </div>
</template>

<script>
import chains from "./node";
import { excel2json } from "./excel2json";
import { EthWeb3 } from "./ethWeb3";
//const ERC20ABI = require('./ERC20.json');
import ERC20ABI from "./ERC20.json";
import Vue from "vue";
//import Vue from 'vue';

export default {
    name: "App",
    data() {
        window.app = this;
        return {
            // Note `isActive` is left out and will not appear in the rendered table
            fields: ["no", "address", "amount", "nonce", "txhash"],
            transList: [],
            nonce: 10000,
            txCount: 0,
            eweb3: null,
            token: null,
            gasPrice: 1e9,
            balanceOf: null,
            confirmed: 0,
            prikey: null,
            nodeurl: null,
            tokenAddress: null,
            options: chains.reduce((optobj, node) => {
                optobj.push({ ...node, value: optobj.length });
                return optobj;
            }, []),
            selected: 0,
            busy: false,
            lockOpt: false,
            tokenname: null,
            limit: 1000,
            message:"",
            totalAddress:0,
            totalCoin:0
        };
    },
    methods: {
        switchChain(index) {
            this.tokenAddress = this.options[index].token;
            this.nodeurl = this.options[index].nodeurl;
        },
        async init() {
            const eweb3 = new EthWeb3(this.nodeurl, this.prikey);
            const IERC20 = eweb3.ContractAt(ERC20ABI, this.tokenAddress);
            this.balanceOf = await IERC20.methods
                .balanceOf(eweb3.address)
                .call();
            this.eweb3 = eweb3;
            this.token = IERC20;
            this.nonce = await this.eweb3.web3.eth.getTransactionCount(
                this.eweb3.address
            );
            this.txCount = 0;
            this.totalCoin = 0;
            this.gasPrice = await this.eweb3.getGasPrice();
            if(this.gasPrice < 1e9) {
                this.gasPrice = 1e9
            }
            //let nonce = await web3.eth.getTransactionCount(eweb3.address);
            //transList.forEach(sheet => sheet);
            //const transfer = IERC20.methods.transfer(eweb3.address, 1);
        },
        async airDrop() {
            this.busy = true;
            this.balanceOf = await this.token.methods
                .balanceOf(this.eweb3.address)
                .call();
            const nonce = await this.eweb3.web3.eth.getTransactionCount(
                this.eweb3.address
            );
            let empty = true;
            const batch = new this.eweb3.web3.BatchRequest();
            this.transList.forEach((sheet) =>
                sheet.items
                    .filter((item) => item.nonce >= nonce)
                    .slice(0, this.limit)
                    .forEach((item) => {
                        this.eweb3.sendSignedTx(item.tx, batch);
                        empty = false;
                    })
            );
            this.transList.forEach((sheet) =>
                sheet.items
                    .filter((item) => item.nonce < nonce)
                    .forEach((item) => {
                        Vue.set(item, "_rowVariant", "success");
                        //item._rowVariant = 'success'
                    })
            );
            if (!empty) {
                batch.execute();
                setTimeout(this.airDrop, 10000);
            } else {
                this.busy = false;
                this.lockOpt = false;
                this.alert("airdop complete");
            }
        },
        async upload(xlxs) {
            this.lockOpt = true;
            await this.init();
            this.transList = [];
            const data = await xlxs.arrayBuffer();
            const transList = await excel2json(data);

            for (let i = 0; i < transList.length; i++) {
                const sheet = transList[i];
                this.transList.push({
                    ...sheet,
                    items: await this.items(sheet.transfer),
                });
            }
        },

        async items(transfer) {
            const items = [];
            for (let i = 0; i < transfer.length; i++) {
                const trans = transfer[i];
                const nonce = this.nonce + this.txCount++;
                const to = trans[0];
                const amount = trans[1];
                this.totalCoin += Number(amount)/1e18;
                const tx = this.token.methods.transfer(to, amount);
                const signedTx = await this.eweb3.getSignedTx(
                    tx,
                    this.gasPrice,
                    nonce
                );
                items.push({
                    no: i,
                    address: to,
                    amount:amount.slice(0,-18)+"."+amount.slice(-18),
                    nonce,
                    tx: signedTx,
                    txhash: signedTx.transactionHash,
                });
            }
            return items;
        },

        alert(message){
            this.message = message;
            this.$bvModal.show('message');
        }
    },
    computed: {
        account() {
            console.log(this.eweb3);
            return this.eweb3 == null ? null : this.eweb3.address;
        },
    },
    watch: {
        nodeurl() {
            if (this.selected == 0) {
                this.options[0].nodeurl = this.nodeurl;
            }
        },
        tokenAddress() {
            if (this.selected == 0) {
                this.options[0].token = this.tokenAddress;
            }
        },
    },
};
</script>