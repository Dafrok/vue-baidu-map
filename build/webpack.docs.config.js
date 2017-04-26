const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './docs/src/main.js',
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /_cache/
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: [/node_modules/, /md/]
      },
      {
        test: /\.md$/,
        use: ['vue-markdown-loader'],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: ['url-loader']
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ['url-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@': __dirname + '/../src',
      docs: __dirname + '/../docs/src',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/src/template/index.html'
    })
  ]
}
