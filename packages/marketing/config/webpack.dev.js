// merge different webpack configs
const { merge } = require('webpack-merge');

// take some kind html files and inject a couple of different tags inside of it
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            // shared: ['react', 'react-dom'],
            shared: packageJson.dependencies,
        })
    ]
}

const mergedConfig = merge(commonConfig, devConfig);

module.exports = mergedConfig;
// export { mergedConfig }