# Skeleton - Web Application

Walking skeleton capable of building, testing (to come) and deploying a web application.

## Dependencies

Below is a list of all the third party frameworks & libraries that are used in the skeleton.

* [normalize.css](https://github.com/necolas/normalize.css) *2.1.0*
* [Modernizr](http://modernizr.com/) *2.6.2*
* [RequireJS](http://requirejs.org/) *2.1.5*
* [JQuery](http://jquery.com) *1.9.1*

## Automation

All the build automation is handled using [Grunt](http://gruntjs.com). Below are the available Grunt commands.

### Distributable

Creates an application from the source code with the artefacts being placed in a `/dist` directory.

	grunt default

### Watch

Watches for file changes that will trigger tasks that help speed up development. It is recommended that this task is running during development.

    grunt watch
