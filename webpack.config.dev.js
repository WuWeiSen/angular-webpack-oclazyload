'use strict';
var webpack = require('webpack'),
    path = require('path');
module.exports = {
    entry: {
        app: ["./app/core/bootstrap.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|woff|svg|ttf|eot)/,
            loader: 'url?limit=100000',
            exclude: /node_modules/
        }, {
            test:  /.*\.html$/,
            loader: 'raw',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel?presets[]=es2015',
            exclude: /node_modules|bower_components/
        }]
    }
};
