const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
require('babel-register');
require('@babel/polyfill');

module.exports = {
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html'
    })
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 9000
  }
};