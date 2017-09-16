// Karma configuration
// Generated on Mon Jun 12 2017 12:01:58 GMT+0800 (CST)

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'test/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/map.js': ['webpack'],
      '*.js': ['coverage']
    },
    plugins: [
      'karma-mocha',
      'karma-coverage',
      'karma-webpack'
    ],
    webpack: require('./build/webpack.test.config.js'),
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      type: 'html',
      dir: 'test/coverage/'
    },
    reporters: ['progress', 'coverage'],
    nightmareOptions: {
      width: 640,
      height: 480,
      show: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [/*'Nightmare'*/],
    singleRun: true,
    concurrency: Infinity
  })
}
