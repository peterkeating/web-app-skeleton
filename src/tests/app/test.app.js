/*global define, suite, assert, setup, teardown, test, $*/

/**
 * Simple example of how to set up a unit test for a module in the application.
 */
define([
    'app'
],

function(App) {
    'use strict';

    suite('app.js', function () {

        var $app;

        /**
         * Runs before each test. The set-up code in this example is creating an
         * environment that replicates the environment of the real application.
         */
        setup(function () {
            $('body').append('<div class="js-app"></div>');
            $app = $('.js-app');
        });

        /**
         * Runs after each test. The teardown code in this example is removing DOM
         * elements that were added during testing so they're not visible in the
         * test reporter, which shows the results of the tests.
         */
        teardown(function () {
            $app.remove();
        });

        /**
         * Tests for the constructor method.
         */
        suite('constructor', function () {

            /**
             * Simple test that creates a new instance of App and checks that it
             * added the expected mark up to the DOM.
             */
            test('adds message to DOM.', function () {
                new App();
                assert.equal($app.html(), '<p>Walking...</p>');
            });
        });
    });
});
