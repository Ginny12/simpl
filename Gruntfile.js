'use strict';

/* globals module */

module.exports = function(grunt) {

  // configure project
  grunt.initConfig({
    // make node configurations available
    pkg: grunt.file.readJSON('package.json'),

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      default: {
        options: {
          import: 2
        },
        src: ['**/*.css','!node_modules/**/*']
      }
    },

    htmlhint: {
      default: {
        src: ['**/*.html', '!node_modules/**/*']
      }
    },

    jscs: {
      src: ['**/main.js'],
      options: {
        config: 'google', // as per Google style guide – could use '.jscsrc' instead
        'excludeFiles': ['node_modules/**/*'],
        requireCurlyBraces: ['if']
      }
    },

    jshint: {
      options: {
        ignores: ['node_modules/**/*'],
        // use default .jshintrc files
        jshintrc: true
      },
      // files to validate
      // can choose more than one name + array of paths
      // usage with this name: grunt jshint:files
      files: ['**/main.js']
    }

});


  // enable plugins
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // set default tasks to run when grunt is called without parameters
  grunt.registerTask('default', ['csslint', 'htmlhint', 'jscs', 'jshint']);
  // also possible to call JavaScript directly in registerTask()
  // or to call external tasks with grunt.loadTasks()
};
