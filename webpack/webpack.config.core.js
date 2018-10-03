const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  devtool: 'source-map',
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [
    'react',
    'react-dom',
    'react/react-dom',
    'gsap',
    'prop-types',
    'requirejs',
    'redux-first-router',
    'redux',
    'react-redux'
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': 'node_modules'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1000000
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(gif|png|jpg|jpeg)(\?[a-z0-9]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 1048576
        }
      }
    ]
  }
};
