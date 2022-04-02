require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remain hole guess enter bone gate'; 
let testAccounts = [
"0xf50a745f6f61557332bbe21cb38bb2736a679309d4bda41c5560b537961b28dc",
"0xb2e61fb2a83363c266a6238bff33c9b8cfe1252712e548462fef5fda3cc2a0d8",
"0xda7f9e3bdf561ed0c25bf2bf04eaa02f450ba41ce51cebbfedcb53f6676f2d8b",
"0xd5660169a7f5a07241cb21732effdab239fbb3cdddbb89d489b7b2635fa7c0ab",
"0x79315bfc599803806f86a0e1fa41654ca8893040aa0822f5f2d1058d62981ae0",
"0xf8129c300a777a513a126986454564eb76def5d50ed7ad21fcf863f2dbf1259b",
"0x5d5247527f2e79eb2498ec14e17e3c71b944a2c1052457f15137a99cdfc0c5d5",
"0x8f25469d6eefa9d7f81342cd4cce8c7a9b1869199a78816ae4d591168fa92a30",
"0x393c848b5c5fd83bd0861186dbb26fe33576884302f6ef302fdfeaffb2ba85d2",
"0xa73ee34f45ce4580c806573bc25872caaafa691750915af15d0b2fe7fe92352a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

