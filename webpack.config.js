const path = require('path');
const webpack = require('webpack');
const  { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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