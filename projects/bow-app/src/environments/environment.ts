// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    poolId: "p1",
    liquiditySymbol: "BSLP-01",
    tokenSymbol: "BOW",
    virtualPriceDiff: 0.006,
    coins: [{ symbol: 'bowDAI' }, { symbol: 'bowHUSD' }, { symbol: 'bowUSDT' }],
    chains: {
        256: {
            enabled: true,
            name: 'DEV',
            rpc: 'https://http-testnet.hecochain.com',
            contracts: {
                proxy: {
                    address: "0x2079eCf1bb1FA3a98f09f5743b3Aa6edA9338c06"
                },
                pid: 0
            }
        },
        1337: {
            enabled: true,
            name: 'DEV',
            rpc: 'http://localhost:8545/',
            contracts: {
                proxy: {
                    address: "0x7a47AAa1a420690DCAAF18be426b1fC160460A08"
                },
                pid: 0
            }
        },
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
