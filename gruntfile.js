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
        }
    });

    /**
     * Loads libraries to assist with the build process.
     */
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');

    /**
     * Register the default task that will be responsible for building the web
     * application.
     */
    grunt.registerTask('default', ['requirejs', 'sass']);
};
