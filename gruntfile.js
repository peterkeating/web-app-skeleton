/**
 * Unfamiliar with Grunt? Here are some links that will allow you to learn more.
 *
 * - http://gruntjs.com
 * - http://gruntjs.com/getting-started
 * - http://howtonode.org/introduction-to-npm
 */

'use strict';

module.exports = function(grunt) {

    /**
     * Generates a random 7 character long string that can be used for cache busting.
     */
    var hash = Math.random().toString(36).substring(2, 9);

    /**
     * Configuring the tasks available for the build process.
     */
    grunt.initConfig({

        /**
         * Deletes the any previous artefacts.
         */
        clean: ["dist/"],

        mocha: {
            all: [ 'src/tests/*.html' ]
        },

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
                    out: 'dist/js/' + hash + '.js'
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
                    { src: ['src/index.html'], dest: 'dist/index.html' },
                    { src: ['src/app/css/styles.css'], dest: 'dist/css/' + hash + '.css' },
                    { src: ['src/vendor/modernizr.js'], dest: 'dist/js/vendor/modernizr.js' }
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
                        replacement: '<script src="js/' + hash + '.js"></script>'
                    },
                    {
                        pattern: 'vendor/modernizr.js',
                        replacement: 'js/vendor/modernizr.js'
                    },
                    {
                        pattern: 'app/css/styles.css',
                        replacement: 'css/' + hash + '.css'
                    }]
                }
            }
        },

        /**
         * Analyses JavaScript files using JSHint for errors or potential problems.
         * You can customise the parameters by modifying the .jshintrc file.
         * - http://jshint.com/
         */
        jshint: {
            all: [
                'gruntfile.js',
                'src/app/js/**/*.js',
                'src/tests/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        /**
         * Starts watching files for additions, changes or deletions, which will
         * trigger a task to be run. Current tasks are display below.
         *
         * - Changes to .scss files will trigger a Sass to CSS conversion.
         */
        watch: {

            /**
             * Any changes made to a .scss file in the project trigger a conversion
             * of Sass to CSS.
             */
            sass: {
                files: '**/*.scss',
                tasks: ['sass']
            },

            /**
             * Any changes to JavaScript files triggers the test suite to be tested.
             */
            js: {
                files: 'src/**/*.js',
                tasks: ['mocha']
            }
        },

        /**
         * Starts a local web server.
         */
        connect: {
            /**
             * Local web server that points to the directory that contains production
             * ready artefacts created by running the 'dist' task.
             */
            production: {
                options: {
                    port: 9001,
                    base: 'dist'
                }
            },

            /**
             * Local web server that points to the src directory that contains
             * the development code.
             */
            dev: {
                options: {
                    port: 9001,
                    base: 'src'
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    /**
     * Register the default task that will run the watch task. This task is useful
     * to have running during development.
     */
    grunt.registerTask('default', ['watch']);

    /**
     * This task will build a production ready version of the web app.
     */
    grunt.registerTask('dist', ['clean', 'jshint', 'mocha', 'requirejs', 'sass', 'copy', 'string-replace']);

    /**
     * Starts web server whose base url is the directory that stores the production
     * ready artefact.
     */
    grunt.registerTask('production', ['dist', 'connect:production:keepalive']);

    /**
     * Starts web server whose base url is the directory that contains the development
     * code.
     */
    grunt.registerTask('dev', ['connect:dev:keepalive']);
};
