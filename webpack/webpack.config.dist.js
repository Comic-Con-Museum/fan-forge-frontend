const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "../dist";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  externals: [
    'react',
    'react-dom',
    'react/react-dom',
    'prop-types',
    'requirejs',
    'redux-first-router',
    'redux',
    'react-redux'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.(gif|png|jpg|jpeg)(\?[a-z0-9]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 1048576
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ]
}
