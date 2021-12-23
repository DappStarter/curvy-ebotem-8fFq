require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture stone raise saddle million honey light army gasp'; 
let testAccounts = [
"0x9f010dc9dd4a1245fb8b2ca81aecfe3b7d08ba28d88de8a8839230f1c10c385a",
"0x7ca816c4e450387a3087e5dca6f0a12af2b227c9e38ea77c1e3dc32857d078e1",
"0xdf756de7319a0e91f6428d13a9366ac1e00d2f821d2701ab894276265ecd2e43",
"0xdf3eae41ec1c6d92e3d014d90f1551e117cd2937f33429149b6e87b9246c092a",
"0xbe18039e5c7cc89625b75406cf06407382642dedaeb7c3ac9fcce2da679c9d7d",
"0x8a3c8107c4b8ac921dd714cc8cd1690f9a9d17dd2e4acf7175946890cb8afbf1",
"0xf52919ed0305c80e1a06d2f8c3da10044810feb5575b0ca6a5e0affcd25f71c2",
"0x618ed290c0d3fe2bd81bddd22d5ff9ea5b6a15581bbb68a074e1b9aba245c18a",
"0x8a874ad47432f605d81f2469c6062d687c0b394a4e133ea3919ca82e2ab8855f",
"0x35cc6dd6a408b1a4a0171e8d0336cc05bed018824abdf1f124032a73681d8c3a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

