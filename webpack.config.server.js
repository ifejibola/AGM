const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js');
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: 'server',
    mode: "development",

    entry: './server/script.js',
    target: "node",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build'),
        // publicPath: '/build/'

    },
    externals: [nodeExternals()],
    // stats: 'normal',
    // stats: 'errors-only',
}

// module.exports = config
module.exports = merge(baseConfig, config);