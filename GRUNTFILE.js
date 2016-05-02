module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.loadNpmTasks('grunt-strip-css-comments');
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Define paths.
    paths: {
      sass: 'styles/sass',
      devCSS: 'styles/css',
      prodCSS: 'styles/deploy/styles',
    }, // paths

    uglify: {
      global: {
        files: {
          "js/site.min.js": ['js/*.js']
        }
      }
    }, // uglify

    cssbeautifier: {
      global: {
        files: {
          src: ['styles/css/*.css']
        },
        options: {
          indent: '  ',
          openbrace: 'end-of-line',
          autosemicolon: false
        }
      }
    }, // cssbeautifier

    stripCssComments: {
      global: {
        files: [{
          expand: true,
          src: ['styles/css/*.css']
        }]
      }
    }, // stripCssComments

    sass: {
      global: {
        options: {
          sourceMap: true,
          sourceComments: false,
          outputStyle: 'expanded'
        },
        files: [{
          expand: true,
          cwd: '<%= paths.sass %>/',
          src: ['**/*.scss'],
          dest: '<%= paths.devCSS %>/',
          ext: '.css'
        },
        ],
      }
    }, // sass

    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ['**/*.html', 'js/**/*.{js,json}', 'styles/css/*.css', 'images/**/*.{png,jpg,jpeg,gif,webp,svg}']
      },
      js: {
        files: ['js/*.js'],
        tasks: ["uglify"]
      },
      css: {
        files: ["styles/sass/**/*.scss"],
        tasks: ["sass"]
      },
    } // watch

  });
  require("load-grunt-tasks")(grunt);
  // grunt command
  grunt.registerTask("default", ["sass", "watch"]);
  // grunt format command (run before code commit)
  grunt.registerTask("format", ["stripCssComments", "cssbeautifier"]);
};