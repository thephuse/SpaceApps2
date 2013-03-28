module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['styles/*.scss', '*.html', 'scripts/*.js'],
        tasks: ['sass', 'uglify'],
        options: {
          nospawn: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'styles/main.css': 'styles/main.scss'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'vendor/vendor.min.js': 
          [
            'components/jquery/jquery.min.js',
            'components/bootstrap/js/bootstrap-affix.js',
            'scripts/tweet.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass', 'uglify']);

};