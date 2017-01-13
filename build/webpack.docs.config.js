const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './docs/src/main.js',
  output: {
    path: './docs',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/, /md/]
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "../node_modules/bulma")]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/src/template/index.html'
    })
  ]
}
