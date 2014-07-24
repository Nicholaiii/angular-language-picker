module.exports = function (grunt) {

  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    html2js: {
      options: {
        base: 'src/templates',
        indentString: '  '
      },
      k8LanguagePicker: {
        src: ['src/templates/**/*.html'],
        dest: 'dist/angular-language-picker.templates.js'
      },
    },

    copy: {
      main: {
        files: [{
          src: 'src/angular-language-picker.js',
          dest: 'dist/angular-language-picker.js'
        }]
      }
    },

    watch: {
      src: {
        files: ['src/**/*'],
        tasks: ['build'],
        options: {
          spawn: false
        }
      }
    },

    connect: {
      server: {
        options: {
          base: './',
          port: 1987
        }
      }
    },

  });

  grunt.registerTask('build', [
    'html2js',
    'copy'
  ]);

  grunt.registerTask('dev', [
    'build',
    'connect',
    'watch'
  ]);

};
