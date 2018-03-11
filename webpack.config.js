const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  watch: true,
  target: 'electron',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/build/app',
    publicPath: 'build/',
    filename: 'bundle.js'
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
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
        filename: 'bundle.css',
        disable: false,
        allChunks: true
      }
    ),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};