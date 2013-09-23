/*global mocha, window*/

require([
    'jquery',
    'chai',

    /**
     * All the tests that need to be run should be defined here.
     */
    '../../tests/app/test.app'
],

function ($, chai) {
    /**
     * Any libraries that are used in most tests can be made available in the global
     * name space, instead of having to define the need for them in each test module.
     */
    window.$ = require('jquery');
    window.chai  = require('chai');
    window.assert = chai.assert;

    /**
     * Begins the tests.
     */
    mocha.run();
});
