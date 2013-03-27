'use strict';

module.exports = function(grunt) {

    /**
     * Configuring the tasks available for the build process.
     */
    grunt.initConfig({

        /**
         * Optimizes the JavaScript into a single file using the r.js optimizer.
         */
        requirejs: {
            compile: {
                options: {
                    name: 'main',
                    mainConfigFile: 'src/app/js/config.js',
                    paths: {
                        requireJS: '../../vendor/require'
                    },
                    include: 'requireJS',
                    preserveLicenseComments: false,
                    out: 'dist/js/app.js'
                }
            }
        },

        /**
         * Compiles Sass stylesheet into a minified CSS file.
         */
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'src/app/css/styles.css': 'src/app/css/scss/styles.scss'
                }
            }
        },

        /**
         * Copies files that make up a production ready version of the web app.
         */
        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, src: ['src/index.html'], dest: 'dist/' },
                    { src: ['src/app/css/styles.css'], dest: 'dist/css/styles.css' }
                ]
            }
        },

        /**
         * Updates the URLs to assets in the HTML file.
         */
        'string-replace': {
            dist: {
                files: {
                    'dist/index.html': 'dist/index.html'
                },
                options: {
                    replacements: [{
                        pattern: '<script data-main="app/js/config" src="vendor/require.js"></script>',
                        replacement: '<script src="js/app.js"></script>'
                    },
                    {
                        pattern: 'vendor/modernizr.js',
                        replacement: 'js/vendor/modernizr.js'
                    }]
                }
            }
        }
    });

    /**
     * Loads libraries to assist with the build process.
     */
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');

    /**
     * Register the default task that will be responsible for building the web
     * application.
     */
    grunt.registerTask('default', ['requirejs', 'sass', 'copy', 'string-replace']);
};
