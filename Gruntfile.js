//Grunt configuration
    $ = require('jquery'),

module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    //blanket_mocha CONFIGURATION
    blanket_mocha: {
      options: {
        run: true,
        reporter: 'Min',
        // We want a minimum of 70% coverage
        threshold: 70
      },
      files: {
        src: '*.html'
      }
    },


    //KARMA CONFIGURATION
    karma : {
      options: {
          //Karma config file
          configFile: 'karma.conf.js',
          files: [
              'node_modules/chai/chai.js',
              'node_modules/sinon-chai/lib/sinon-chai.js',
              'node_modules/sinon/pkg/sinon.js',
              'node_modules/jquery/dist/jquery.js',

              // Our test files
              'lib/*.js',
              'js/*.js',
              'test/*.js',
          ]
      },

      dev: {
          // All tested enviroments!!! (Browsers + phantomJS)
          browsers: ['Chrome', 'Firefox', 'PhantomJS']
      }
  }
  });
  //Register the task as DEFUALT
  grunt.registerTask('default', ['karma']);
};
