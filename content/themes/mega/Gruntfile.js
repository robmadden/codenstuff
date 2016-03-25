module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
         '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
         '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
         '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> -' +
         ' Licensed under the <%= pkg.license %> License\n*/\n\n',

    // JSHint JavaScript files
    jshint: {
      files: ['Gruntfile.js', 'package.json']
    },

    // Concatenate all JavaScript files
    concat: {
      options: {
        stripBanners: true,
        separator: ';'
      },
      dist: {
        src: ['assets/js/{,*/}*.js',
            '!assets/js/script.js'],
        dest: 'assets/js/script.js'
      }
    },

    // Minify JavaScript with Uglify
    uglify: {
      options: {
        mangle: false
      },
      dist: {
          files: {
            'assets/js/script.min.js': ['<%= concat.dist.dest %>']
          }
        }
    },

    // Compile LESS to CSS -  destination : source
    less: {
      compile: {
        options: {
          strictMath: true
        },
        files: {
          'assets/css/theme.css': ['assets/less/theme.less', 'assets/less/themes.less'],
          'assets/css/theme-blue.css': 'assets/less/theme-blue.less',
          'assets/css/theme-red.css': 'assets/less/theme-red.less',
          'assets/css/theme-green.css': 'assets/less/theme-green.less',
          'assets/css/theme-columbia-blue.css': 'assets/less/theme-columbia-blue.less',
          'assets/css/theme-dark-purple.css': 'assets/less/theme-dark-purple.less',
          'assets/css/theme-yellow.css': 'assets/less/theme-yellow.less'
        }
      }
    },

    // Simple config to run LESS, jshint and uglify any time a js or LESS file is added, modified or deleted
    watch: {
      less: {
        files: ['assets/less/{,*/}*.less'],
        tasks: ['less:compile']
      },
      jshint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      concat: {
        files : ['<%= concat.dist.src %>'],
        tasks: ['concat']
      }
    }
  });

  // Load the plug-ins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default tasks
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less:compile']);
  grunt.registerTask('serve', ['watch']);
};
