require.config({

   /**
    * Array of dependencies that should be loaded as soon as require is defined.
    * Currently this will load main.js which will trigger the loading of its
    * dependencies.
    */
    deps: [ 'main' ],

   /**
    * Setting up root paths for module IDs.
    */
    paths: {
        jquery: '../../vendor/jquery'
    }

});
