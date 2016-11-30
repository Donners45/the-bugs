module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		 jshint: {
	            dev: {        
    	            src: ['src/js/**/*.js']
        	    }
        },

        uglify: {
        	banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
    
            build: {
            	src: 'src/js/*.js',
          		dest: 'dest/<%= pkg.name %>.min.js'
            }
         },
		copy: {
			files: {
				cwd: 'src/',
				src: '**/*.html',
				dest: 'dest/',
				expand: true
			}
		},

		less: {                             
			 development: {
                options: {
                    paths: ['src/css']
                },
                files: {
                   'dest/css/main.css': 'src/css/main.less'
                }
            }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
	

	grunt.registerTask('default', ['uglify', 'jshint', 'copy', 'less']);

};