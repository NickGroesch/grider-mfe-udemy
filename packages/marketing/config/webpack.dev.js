const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const webpack = require('webpack')
const packageJson = require('../package.json')


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: { //tbdiscussed
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                "./MarketingApp": "../src/bootstrap"
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig) //order, dev overwrites common