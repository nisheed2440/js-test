// karma.conf.js
module.exports = function (config) {
  config.set({
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/PubSubJS/src/pubsub.js',
      'test-files/*.js',
      'tests/*spec.js'
    ],
    preprocessors: {
      'test-files/*.js': ['coverage']
    },
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['mocha', 'coverage'],
    browsers: ['PhantomJS'],
    singleRun: true,
    coverageReporter: {
      type: "html",
      dir: "./coverage/"
    },
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-mocha-reporter',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ]
  });
};