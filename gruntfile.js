module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      fonts: {
        files: [{
          expand: true,
          src: [
          'src/fonts/**/*.{eot,svg,ttf,woff,woff2}',
          ],
          dest:"dist/assets/fonts/",
          flatten: true
        }]
      },
      html: {
        files: [{
          expand: true,
          src: [
          'src/*.html',
          ],
          dest:"dist/",
          flatten: true
        }]
      }
    },

    concat: {
      jsa: {
        src: [
        'src/vendor/*.js',
        'src/init.js',
        'src/components/**/*.js'
        ],
        dest: 'dist/assets/a.js',
      },

      css: {
        src: [
        'src/options.scss',
        'src/vendor/*.{scss,css}',
        'src/fonts/**/*.{scss,css}',
        'src/*.scss',
        'src/components/**/*.{scss,css}'
        ],
        dest: 'src/tmp/build.scss',
      },
    },

    sass: {
      dist: {
        options: { style: 'compressed', sourcemap: 'none', noCache: true },
        files: {
          'dist/assets/a.css': 'src/tmp/build.scss',
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
      },

      main: {
        src: 'dist/assets/a.css',
        dest: 'dist/assets/a.css'
      }

    },

    uglify: {
      js: {
        src: 'dist/assets/a.js',
        dest: 'dist/assets/a.js'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'dist/assets/a.js': 'dist/assets/a.js'
        }
      }
    },

    cssmin: {
      options: {
        restructuring: false,
        shorthandCompacting: false,
        roundingPrecision: -1,
        keepSpecialComments: 0,
        sourceMap: false
      },
      target: {
        files: {
          'dist/assets/a.css': ['dist/assets/a.css']
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'dist/assets/images/',
          flatten: true
        }]
      }
    },

    connect: {
      test: {
        options: {
          port: 8000,
          base: 'dist/'
        }
      },
    },

    watch: {
      assets: {
        files: ['src/*.html', 'src/*.{scss,js}', 'src/components/**/*.{js,scss,css,png,jpg,gif}', 'src/fonts/**/*.{eot,svg,ttf,woff,woff2}', 'src/vendor/**/*.{scss,css,js}'],
        tasks: ['copy', 'concat', 'sass'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    }
  });
  
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['copy', 'concat', 'sass', 'autoprefixer', 'babel', 'uglify', 'imagemin', 'cssmin']);
  grunt.registerTask('dev', ['connect', 'watch']);
};