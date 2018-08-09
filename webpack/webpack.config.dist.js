const webpack = require('webpack')
const path = require('path')
const base = require('./webpack.config.core.js')

module.exports = Object.assign({}, base, {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: false
    })
  ]
})
