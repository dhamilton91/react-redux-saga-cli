'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
	prompting: function () {
		this.log(yosay("Creating Store"));

		var prompts = [
			{
				type: 'input',
				name: 'DIRECTORY_NAME',
				message: 'Where should store live ?',
				default: "./app"
			}
		];
		return this.prompt(prompts).then(function (props) {
			this.props = props;
		}.bind(this));
	},

	writing: function () {
		if (this.props.DIRECTORY_NAME.indexOf('./') !== 0) {
			this.props.DIRECTORY_NAME = './' + this.props.DIRECTORY_NAME;
		}
		if (this.props.DIRECTORY_NAME.charAt(this.props.DIRECTORY_NAME.length - 1) !== '/') {
			this.props.DIRECTORY_NAME += '/';
		}
		this.fs.copyTpl(
			this.templatePath('store.template.js'),
			this.destinationPath(this.props.DIRECTORY_NAME + 'configureStore.js')
		);
	}
});
