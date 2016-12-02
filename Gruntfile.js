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
			target:{
                files: [
                    {	//Source HTML
                        cwd: 'src/',
                        src: '**/*.html',
                        dest: 'dest/',
                        expand: true
                    } ,
                    {	// Vendor JS
						flatten: true, 
						expand: true, 
						src: ['jquery/dist/jquery.min.js', 'fullpage/dist/jquery.fullpage.min.js'], 
						dest: 'dest/js/vendor/', 
						cwd: 'bower_components/'
                    },
					{ //Vendor CSS
						flatten: true, 
						expand: true, 
						src: ['fullpage/dist/jquery.fullpage.min.css'], 
						dest: 'dest/css/vendor/', 
						cwd: 'bower_components/'
					}
                ]
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