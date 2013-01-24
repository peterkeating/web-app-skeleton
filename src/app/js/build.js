({
    /**
    * Specifies the location of the runtime configuration file that instructs
    * requireJS how to construct the application.
    */
    mainConfigFile: "./config.js",

    /**
    * Name of the module to be optimised.
    */
    name: "main",

    paths: {
        requireJS: './vendor/require'
    },

    include: 'requireJS',

    /**
    * File that is outputted by r.js containing all the code for the application.
    */
    out: "../../../intermediate/js/final.js"
})
