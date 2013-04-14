/*global mocha*/

'use strict';

require.config({

    /**
     * URL to the JS being tested so modules can be easily loaded in the test code.
     */
    baseUrl: '../app/js',

    /**
     * Defaults to loading the module that defines which test modules should be
     * loaded.
     */
    deps: [ '../../tests/suite' ],

    paths: {
        chai: '../../vendor/chai',
        jquery: '../../vendor/jquery'
    },

    shim: {
        mocha: {
            attach: 'mocha'
        }
    }
});

/**
 * Option here is either 'tdd' or 'bdd'. As you can see we have gone with tdd. This
 * means setup, teardown, suite and test functions are used to construct the tests.
 * You can find out more about the setup function from the link below.
 *
 * - http://visionmedia.github.com/mocha/
 */
mocha.setup({
    ui: 'tdd'
});
