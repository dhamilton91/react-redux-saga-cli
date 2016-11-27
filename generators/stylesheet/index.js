'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({

	prompting: function () {
		console.log(yosay('Creating Component'));
		var prompts = [
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
				choices: ["styles.scss", 'stylesheet.js'],
				default: "styles.scss"
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
		this.fs.copyTpl(
			this.templatePath(templatePath + '.js'),
			this.destinationPath(state.COMPONENTS_PATH + '/' + this.props.COMPONENT_NAME + '/' + this.props.STYLESHEET_NAME),
			this.props
		);
	},
	end: function () {

	},
});
