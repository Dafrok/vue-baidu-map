const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: 'docs/main.js',
    libs: [
      'vue',
      'vue-router',
      'prismjs',
      'material-design-lite/material.min.js'
    ],
    resource: [
      'prismjs/themes/prism-tomorrow.css',
      'docs/fonts/iconfont.css',
      'material-design-icons/iconfont/material-icons.css',
      'material-design-lite/material.min.css'
    ],
    vendor: [
      'docs/components/App.vue',
      'docs/components/CateView.vue',
      'docs/components/DocPreview.vue',
      'docs/components/Drawer.vue',
      'docs/components/RootFrame.vue'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader', 'eslint-loader'],
        exclude: /_cache/
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
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
      '@': path.resolve(__dirname, '../src'),
      docs: path.resolve(__dirname, '../docs')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/template/index.html'),
      chunks: ['libs', 'vendor', 'resource', 'main']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'libs', 'resource', 'manifest'],
      minChunks: Infinity
    }),
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    })
  ]
}
