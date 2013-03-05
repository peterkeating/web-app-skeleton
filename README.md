# Skeleton - Web Application

Walking skeleton capable of building, testing and deploying a web application.

## Dependencies

Below is a list of all the third party frameworks & libraries that are used in the skeleton.

### Front End

* [normalize.css](https://github.com/necolas/normalize.css) *2.1.0*
* [Modernizr](http://modernizr.com/) *2.6.2*
* [RequireJS](http://requirejs.org/) *2.1.5*
* [JQuery](http://jquery.com) *1.9.1*

### Build

* [Ant Contributions](http://ant-contrib.sourceforge.net/) *1.0 B3*
* [YUICompressor](http://developer.yahoo.com/yui/compressor/) *2.4.7*
* [Rhino](https://developer.mozilla.org/en-US/docs/Rhino) *1.7R4*
* [r.js](http://requirejs.org/docs/optimization.html) *2.1.5*
* [Optipng](http://optipng.sourceforge.net/) *0.7*

## Automation

All the build automation is handled using Ant. Below are the available Ant commands.

### Distributable

Creates an application from the source code with the artefacts being placed in a `/dist` directory.

	ant build

### Image Optimisation

Reduces the size of all the images in the `src/images` directory placing the optimised images in a `/optimise-images` directory. Currently the images are only optimised through Optipng, in the future it would be good to handle other image formats such as JPEG.

	ant images
