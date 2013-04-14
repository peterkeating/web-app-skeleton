/*global define*/
define(
   /**
    * Name of the module.
    */
    'app',

   /**
    * Dependencies that are required by the module.
    */
    ['jquery'],


    function ($) {

       /**
        * Constructor for the App module.
        */
        function App () {
            this.initialise();
        }

        var p = App.prototype = {};

       /**
        * Application is initialised, modifying the HTML content displayed to the
        * user to indicate that things are working.
        */
        p.initialise = function () {
            $('.js-app').html('<p>Walking...</p>');
        };

        return App;
    }
);
