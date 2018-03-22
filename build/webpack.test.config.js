module.exports = {
  // entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, './'),
  //   filename: '../index.js',
  //   library: 'VueBaiduMap',
  //   libraryTarget: 'umd'
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}
