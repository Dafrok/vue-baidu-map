const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/Map.vue',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
    library: 'VueBaiduMap',
    libraryTarget: 'umd'
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
        exclude: /node_modules/
      }
    ]
  },
}
