'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.Base.extend({
	prompting: function () {
		console.log(yosay('Creating Middleware'));
		var prompts = [
			{
				type: 'input',
				name: 'DIRECTORY_NAME',
				message: 'Where does the middleware directory live ?',
				default: "./app"
			},
			{
				type: 'input',
				name: 'MIDDLEWARE_NAME',
				message: 'Middleware name?',
				default: "Default"
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
			this.templatePath('middleware.template.js'),
			this.destinationPath(this.props.DIRECTORY_NAME + 'middleware/' + this.props.MIDDLEWARE_NAME + '.js'),
			this.props
		);
	},
	end: function() {
		this.composeWith('react-redux-saga-cli:middlewareIndex', {
			options: {
				props: this.props
			}
		});
	}
});
