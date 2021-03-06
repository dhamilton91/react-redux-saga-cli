'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
	prompting: function () {
		this.log(yosay('Creating components index.js'));
	},

	writing: function () {
		var component = this.options.props.COMPONENT_NAME;
		var path = this.options.props.path;
		this.fs.copyTpl(
			this.templatePath('index.template.js'),
			this.destinationPath(path + '/index.js'),
			{component: component}
		);
	}
});
