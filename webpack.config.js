
var path = require('path');
var webpack = require('webpack');
var HtmlWebPackPlugin = require("html-webpack-plugin");

var htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./client/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: ['./client/client.js'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
                      "presets": [
                        ["env", {
                          "targets": {
                            "node": "current"
                          }
                        }],
                        "react",
                        "stage-0"],
                      "plugins": [
                        "transform-es2015-destructuring",
                        "transform-es2015-parameters",
                        "transform-object-rest-spread",
                        "transform-runtime",
                        "add-module-exports",
                        "transform-decorators-legacy",
                        "transform-react-display-name"
                      ],
                      "ignore": [
                        "node_modules/**/*.js"
                      ]
                    }

        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-local-loader' },
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true, modules: true, minimize: false, importLoaders: 1, localIdentName: '[local]_[hash:base64:5]' } },
          { loader: 'sass-loader', options: { sourceMap: true, outputStyle: 'expanded', sourceMapContents: true } }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
