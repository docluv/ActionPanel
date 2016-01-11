module.exports = function (grunt) {


	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			dist: {
				options: {
					banner: '/* My minified css file */'
				},
				files: {
					"dist/action.panel.min.css": ["src/css/**.css"]
				}
			}
        },
        less: {
            dev: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true
                },
                files: [{
					expand: true,
					src: ['src/css/**/**.less'],
					ext: '.css'
					}]
            }
        },
        uglify: {
            options: {
                compress: {}
            },
            dist: {
                src: ["src/js/action.panel.js"],
                dest: 'dist/action.panel.min.js'
            }
        }

	});

    // Default task.
    grunt.registerTask('default', ['uglify', 'less', 'cssmin']);

};