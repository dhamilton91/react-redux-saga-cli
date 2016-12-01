'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');


module.exports = yeoman.Base.extend({
	prompting: function () {
		this.log(yosay("Creating container"));

		var prompts = [
			{
				type: 'input',
				name: 'DIRECTORY_NAME',
				message: 'Where does the container directory live ?',
				default: "./app"
			},
			{
				type: 'input',
				name: 'COMPONENT_NAME',
				message: 'What is the component called ?',
				default: "default"
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
		if (this.props.DIRECTORY_NAME.indexOf('./') !== 0) {
			this.props.DIRECTORY_NAME = './' + this.props.DIRECTORY_NAME;
		}
		if (this.props.DIRECTORY_NAME.charAt(this.props.DIRECTORY_NAME.length - 1) !== '/') {
			this.props.DIRECTORY_NAME += '/';
		}
		this.fs.copyTpl(
			this.templatePath('container.template.js'),
			this.destinationPath(this.props.DIRECTORY_NAME + 'containers/' + this.props.COMPONENT_NAME + '/index.js'),
			this.props
		);
		this.composeWith('react-redux-saga-cli:actions', {
			options: {
				isNested: true,
				props: this.props
			}
		});
		this.composeWith('react-redux-saga-cli:constants', {
			options: {
				isNested: true,
				props: this.props
			}
		});
		this.composeWith('react-redux-saga-cli:reducer', {
			options: {
				isNested: true,
				props: this.props
			}
		});
		this.composeWith('react-redux-saga-cli:sagas', {
			options: {
				isNested: true,
				props: this.props
			}
		});
	},
	end: function () {
		this.composeWith('react-redux-saga-cli:containerIndex', {
			options: {
				props: this.props
			}
		});
	}
});
