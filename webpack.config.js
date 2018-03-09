var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/script.js',
    output: {
        path : path.resolve('./dist'),
        filename: "bundle.js",
        publicPath : '/dist/'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
