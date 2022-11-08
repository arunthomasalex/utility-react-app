const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: 'ignore-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name]-[chunkhash].js'
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true
    },
    resolve: {
        fallback: {
            async_hooks: false,
            path: false,
            zlib: false,
            querystring: false,
            crypto: false,
            fs: false,
            stream: false,
            http: false,
            net: false,
            url: false,
            util: false,
            buffer: false
        }
    }
}