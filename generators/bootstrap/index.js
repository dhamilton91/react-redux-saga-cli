'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

const mkdirp = require('mkdirp-promise/lib/node4');

module.exports = yeoman.Base.extend({

	initializing: function () {
		console.log(yosay("Let's bootstrap this app !"));
	},

	writing: function () {
		mkdirp('./components');
		mkdirp('./containers');
		mkdirp('./middleware');
	},
	end: function () {
		console.log(yosay("Completed bootstrapping !"));
	}

});
