# Skeleton - Web Application

[![Build Status](https://secure.travis-ci.org/peterkeating/web-app-skeleton.png?branch=master)](http://travis-ci.org/peterkeating/web-app-skeleton)

Walking skeleton capable of building, testing and deploying a web application.

## Dependencies

Below is a list of all the third party frameworks & libraries that are used in the skeleton.

* [normalize.css](https://github.com/necolas/normalize.css) *2.1.2*
* [Modernizr](http://modernizr.com/) *2.6.2*
* [RequireJS](http://requirejs.org/) *2.1.8*
* [JQuery](http://jquery.com) *1.10.2*
* [Mocha](http://mochajs.org/) *1.12.0*
* [Chai](http://chaijs.com/) *1.7.2*

## Automation

All the build automation is handled using [Grunt](http://gruntjs.com). Below are the available Grunt commands.

### Distributable

Creates an application from the source code with the artefacts being placed in a `/dist` directory.

	grunt dist

### Watch

Watches for file changes that will trigger tasks that help speed up development. It is recommended that this task is running during development.

    grunt

### Static Web Server

Starts a static web server (via [connect](https://github.com/gruntjs/grunt-contrib-connect)) that will host the development or production web application.

*Command below runs the development version.*

    grunt dev

*Command below runs the production version.*

    grunt production
