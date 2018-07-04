
var path = require('path');
var webpack = require('webpack');


 module.exports = {
     entry: ['./client/App.js'],
     output: {
         path: __dirname,
         publicPath: '/',
         filename: 'bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['env', 'react','stage-2']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };