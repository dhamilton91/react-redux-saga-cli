'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({

	prompting: function () {
		console.log(yosay('Creating stylesheet'));
		var prompts = [
			{
				type: 'input',
				name: 'DIRECTORY_NAME',
				message: 'Where does the component directory live ?',
				default: "./app"
			},
			{
				type: 'input',
				name: 'COMPONENT_NAME',
				message: 'Component name?',
				default: "DEFAULT_COMPONENT_NAME"
			},
			{
				type: 'list',
				name: 'STYLESHEET_NAME',
				message: 'Which stylesheet ?',
				choices: ["styles.css", 'stylesheet.js'],
				default: "styles.css"
			}
		];
		if (!this.options.isNested) {
			return this.prompt(prompts).then(function (props) {
				this.props = props;
			}.bind(this));
		}
		else {
			this.props = this.options.props;
		}
	},

	writing: function () {
		var templatePath = 'stylesheet.template';
		if (this.props.STYLESHEET_NAME === 'stylesheet.js') {
			templatePath += '-rn';
		}
		if (this.props.DIRECTORY_NAME.indexOf('./') !== 0) {
			this.props.DIRECTORY_NAME = './' + this.props.DIRECTORY_NAME;
		}
		if (this.props.DIRECTORY_NAME.charAt(this.props.DIRECTORY_NAME.length - 1) !== '/') {
			this.props.DIRECTORY_NAME += '/';
		}
		this.fs.copyTpl(
			this.templatePath(templatePath + '.js'),
			this.destinationPath(this.props.DIRECTORY_NAME + 'components/' + this.props.COMPONENT_NAME + '/' + this.props.STYLESHEET_NAME),
			this.props
		);
	}
});
