
import path from 'path';
import webpack from 'webpack';


 module.exports = {
     entry: './client/App.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'App.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };