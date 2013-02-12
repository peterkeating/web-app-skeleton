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

    /**
    * Defines the requireJS library (can't be called require because it is a reserved
    * word) so it can be included in the final outputted file using the 'include'
    * property.
    */
    paths: {
        requireJS: './vendor/require'
    },

    /**
    * Need to include requireJS in the final outputted file from r.js so the final
    * JS file has all its dependencies for it to function.
    */
    include: 'requireJS',

    preserveLicenseComments: false,

    /**
    * File that is outputted by r.js containing all the code for the application.
    */
    out: "../../../intermediate/app/js/final.js"
})
