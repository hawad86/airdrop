(function(e){function t(t){for(var a,i,u=t[0],o=t[1],c=t[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0202":function(e){e.exports=JSON.parse('[{"text":"输入或者选择节点","nodeurl":"","token":""},{"text":"HECO","nodeurl":"https://http-mainnet.hecochain.com","token":"0xd10852df03ea8b8af0cc0b09cac3f7dbb15e0433"},{"text":"BSC","nodeurl":"https://bsc-dataseed.binance.org","token":"0x1ab6478b47270ff05af11a012ac17b098758e193"},{"text":"OK Chain","nodeurl":"https://exchainrpc.okex.org","token":"0xd0c6821aba4fcc65e8f1542589e64bae9de11228"},{"text":"Polygon","nodeurl":"https://polygon-rpc.com","token":"0xd10852DF03Ea8b8Af0CC0B09cAc3f7dbB15e0433"},{"text":"Arbitrum","nodeurl":"https://arb1.arbitrum.io/rpc","token":"0x2338a5d62E9A766289934e8d2e83a443e8065b83"}]')},1:function(e,t){},10:function(e,t){},"1d0f":function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Burn","type":"event","signature":"0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"rename","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x66605ba4"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x42966c68"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x79cc6790"}]')},2:function(e,t){},3:function(e,t){},4:function(e,t){},"41d0":function(e,t,n){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[e._v("版本更新: 2021年10月27日23:47:35")]),n("b-form-select",{attrs:{options:e.options,disabled:e.lockOpt},on:{change:e.switchChain},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("div",[e._v(" 节点: "),n("b-input",{attrs:{disabled:e.lockOpt},model:{value:e.nodeurl,callback:function(t){e.nodeurl=t},expression:"nodeurl"}}),e._v(" Token: "),n("b-input",{attrs:{disabled:e.lockOpt},model:{value:e.tokenAddress,callback:function(t){e.tokenAddress=t},expression:"tokenAddress"}}),e._v(" 私钥: "),n("b-input",{attrs:{type:"password",disabled:e.lockOpt,placeholder:"尽量使用一次性账户"},model:{value:e.prikey,callback:function(t){e.prikey=t},expression:"prikey"}}),n("span",[e._v("账户地址:"+e._s(e.account))]),n("br"),n("span",[e._v("账户余额:"+e._s(e.balanceOf))]),n("br"),e._v(" 空投文件(.xlxs): 要求第一列地址，第二列数量，仅支持18位小数。 "),n("b-file",{attrs:{plain:"",disabled:e.busy||null==e.selected||!e.prikey},on:{input:e.upload}}),e.transList.length?n("div",[n("span",[e._v("空投地址数: "+e._s(e.txCount))]),n("br"),n("span",[e._v("空投币总数: "+e._s(e.totalCoin))]),n("br"),n("b-button",{attrs:{disabled:e.busy},on:{click:e.airDrop}},[e._v("执行空投")])],1):e._e(),n("b-tabs",{attrs:{"content-class":"mt-3"}},e._l(e.transList,(function(t,a){return n("b-tab",{key:a,attrs:{title:t.name}},[n("b-table",{attrs:{striped:"",small:"",items:t.items,fields:e.fields}})],1)})),1)],1),n("b-modal",{attrs:{id:"message"}},[n("p",{staticClass:"my-4"},[e._v(e._s(e.message))])])],1)},s=[],i=n("1da1"),u=n("5530"),o=(n("159b"),n("fb6a"),n("4de4"),n("a9e3"),n("96cf"),n("0202")),c=(n("d3b7"),n("25f0"),n("b0c0"),n("e8ae")),l=n("9dcd"),d=n("6314"),p=d.utils,f=l("1e18");function b(e){return y.apply(this,arguments)}function y(){return y=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new c.Workbook,e.next=3,n.xlsx.load(t);case 3:return a=e.sent,e.abrupt("return",a.worksheets.reduce((function(e,t){var n=t._rows.reduce((function(e,t,n){try{var a=t._cells[0]._value.toString();if(p.isAddress(a)){var r=t._cells[1];r&&(r=l(t._cells[1].toString()).mul(f).toString()),e.push([a,r])}else console.log("invalid address:",n,a)}catch(s){console.error(s,t._cells[0],t._cells[1])}return e}),[]);return e.push({name:t.name,transfer:n}),e}),[]));case 5:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var m=n("b6b3"),h=n("1d0f"),v={name:"App",data:function(){return window.app=this,{fields:["no","address","amount","nonce","txhash"],transList:[],nonce:1e4,txCount:0,eweb3:null,token:null,gasPrice:1e9,balanceOf:null,confirmed:0,prikey:null,nodeurl:null,tokenAddress:null,options:o.reduce((function(e,t){return e.push(Object(u["a"])(Object(u["a"])({},t),{},{value:e.length})),e}),[]),selected:0,busy:!1,lockOpt:!1,tokenname:null,limit:1e3,message:"",totalAddress:0,totalCoin:0}},methods:{switchChain:function(e){this.tokenAddress=this.options[e].token,this.nodeurl=this.options[e].nodeurl},init:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new m["EthWeb3"](e.nodeurl,e.prikey),a=n.ContractAt(h,e.tokenAddress),t.next=4,a.methods.balanceOf(n.address).call();case 4:return e.balanceOf=t.sent,e.eweb3=n,e.token=a,t.next=9,e.eweb3.web3.eth.getTransactionCount(e.eweb3.address);case 9:return e.nonce=t.sent,e.txCount=0,e.totalCoin=0,t.next=14,e.eweb3.getGasPrice();case 14:if(e.gasPrice=t.sent,!(e.gasPrice>1e10)){t.next=19;break}throw r="gasPrice is too high ".concat(e.gasPrice),alert(r),r;case 19:e.gasPrice<1e9&&(e.gasPrice=1e9);case 20:case"end":return t.stop()}}),t)})))()},airDrop:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.busy=!0,t.next=3,e.token.methods.balanceOf(e.eweb3.address).call();case 3:return e.balanceOf=t.sent,t.next=6,e.eweb3.web3.eth.getTransactionCount(e.eweb3.address);case 6:n=t.sent,r=!0,s=new e.eweb3.web3.BatchRequest,e.transList.forEach((function(t){return t.items.filter((function(e){return e.nonce>=n})).slice(0,e.limit).forEach((function(t){e.eweb3.sendSignedTx(t.tx,s),r=!1}))})),e.transList.forEach((function(e){return e.items.filter((function(e){return e.nonce<n})).forEach((function(e){a["default"].set(e,"_rowVariant","success")}))})),r?(e.busy=!1,e.lockOpt=!1,e.alert("airdop complete")):(s.execute(),setTimeout(e.airDrop,1e4));case 12:case"end":return t.stop()}}),t)})))()},upload:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.lockOpt=!0,n.next=3,t.init();case 3:return t.transList=[],n.next=6,e.arrayBuffer();case 6:return a=n.sent,n.next=9,b(a);case 9:r=n.sent,s=0;case 11:if(!(s<r.length)){n.next=26;break}return i=r[s],n.t0=t.transList,n.t1=u["a"],n.t2=Object(u["a"])({},i),n.t3={},n.next=19,t.items(i.transfer);case 19:n.t4=n.sent,n.t5={items:n.t4},n.t6=(0,n.t1)(n.t2,n.t3,n.t5),n.t0.push.call(n.t0,n.t6);case 23:s++,n.next=11;break;case 26:case"end":return n.stop()}}),n)})))()},items:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i,u,o,c,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=[],r=0;case 2:if(!(r<e.length)){n.next=16;break}return s=e[r],i=t.nonce+t.txCount++,u=s[0],o=s[1],t.totalCoin+=Number(o)/1e18,c=t.token.methods.transfer(u,o),n.next=11,t.eweb3.getSignedTx(c,t.gasPrice,i);case 11:l=n.sent,a.push({no:r,address:u,amount:o.slice(0,-18)+"."+o.slice(-18),nonce:i,tx:l,txhash:l.transactionHash});case 13:r++,n.next=2;break;case 16:return n.abrupt("return",a);case 17:case"end":return n.stop()}}),n)})))()},alert:function(e){this.message=e,this.$bvModal.show("message")}},computed:{account:function(){return console.log(this.eweb3),null==this.eweb3?null:this.eweb3.address}},watch:{nodeurl:function(){0==this.selected&&(this.options[0].nodeurl=this.nodeurl)},tokenAddress:function(){0==this.selected&&(this.options[0].token=this.tokenAddress)}}},g=v,x=n("2877"),w=Object(x["a"])(g,r,s,!1,null,null,null),k=w.exports,T=n("5f5b");n("41d0");a["default"].use(T["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(k)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},b6b3:function(e,t,n){var a=n("c973").default,r=n("970b").default,s=n("5bc3").default,i=n("9523").default;n("96cf");var u=n("6314"),o=function(){"use strict";function e(t,n){r(this,e),i(this,"web3",void 0),i(this,"address",void 0),this.web3=new u(t),this.addPrivateKey(n),window.web3=this.web3}return s(e,[{key:"ContractAt",value:function(e,t){var n=new this.web3.eth.Contract(e,t,{from:this.address});return n.handleRevert=!0,n}},{key:"ContractDeploy",value:function(e,t,n){return this.ContractAt(e).deploy({data:t,arguments:n})}},{key:"sendTx",value:function(){var e=a(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=4;break}return e.next=3,t.estimateGas();case 3:n=e.sent;case 4:return e.abrupt("return",t.send({gas:n}));case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getSignedTx",value:function(){var e=a(regeneratorRuntime.mark((function e(t,n,a){var r,s,i,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=u.length>3&&void 0!==u[3]?u[3]:0,this.chainID){e.next=5;break}return e.next=4,this.web3.eth.getChainId();case 4:this.chainID=e.sent;case 5:return s=this.web3.eth.accounts.wallet[0],i=3e4,e.abrupt("return",s.signTransaction({from:t._parent.options.from,to:t._parent._address,gasPrice:n,gas:i+3e4,value:r,data:t.encodeABI(),nonce:a,chainId:this.chainID}));case 8:case"end":return e.stop()}}),e,this)})));function t(t,n,a){return e.apply(this,arguments)}return t}()},{key:"sendSignedTx",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(void 0==t)return this.web3.eth.sendSignedTransaction(e.rawTransaction);t.add(this.web3.eth.sendSignedTransaction.request(e.rawTransaction))}},{key:"addPrivateKey",value:function(e){var t=this.web3.eth.accounts.privateKeyToAccount(e);this.web3.eth.accounts.wallet.add(t),this.address=t.address}},{key:"getGasPrice",value:function(){return this.web3.eth.getGasPrice()}}]),e}();e.exports={EthWeb3:o}}});
//# sourceMappingURL=app.2f0189bf.js.map