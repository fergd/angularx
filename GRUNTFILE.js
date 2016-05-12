module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Define paths.
    paths: {
      sass: 'styles/sass',
      devCSS: 'styles/css',
      prodCSS: 'styles/deploy/styles',
    }, // paths

    connect: {
      uses_defaults: {}
    },

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
        files: ['js/*.js']
        // tasks: ["uglify"]
      },
      css: {
        files: ["styles/sass/**/*.scss"],
        tasks: ["sass"]
      },
    } // watch
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt command
  grunt.registerTask("default", ["connect", "sass", "watch"]);
};