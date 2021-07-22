const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
    '@nx-mf-demo/shared/auth-lib',
]);

module.exports = {
    output: {
        uniqueName: 'shell',
        publicPath: 'auto',
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false,
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            // For hosts (please adjust)
            /*remotes: {
          mfe1: 'mfe1@http://localhost:3000/remoteEntry.js',
      },*/

            shared: {
                '@angular/core': { singleton: true, strictVersion: true },
                '@angular/common': { singleton: true, strictVersion: true },
                '@angular/router': { singleton: true, strictVersion: true },
                '@angular/material': { singleton: true, strictVersion: true },
                '@angular/cdk': { singleton: true, strictVersion: true },
                '@daily/test': { singleton: true, strictVersion: true },

                ...sharedMappings.getDescriptors(),
            },
        }),
        sharedMappings.getPlugin(),
    ],
};
