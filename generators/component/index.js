'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({

	prompting: function () {
		console.log(yosay('Creating Component'));
		var prompts = [
			{
				type: 'input',
				name: 'DIRECTORY_NAME',
				message: 'Where does the components directory live ?',
				default: "./app"
			},
			{
				type: 'input',
				name: 'COMPONENT_NAME',
				message: 'What should the component be called ?',
				default: "Default"
			},
			{
				type: 'list',
				name: 'WITH_CONTAINER',
				message: 'Do you want to create a container with the component ?',
				choices: ["Y", "N"],
				default: "Y"
			},
			{
				type: 'list',
				name: 'STATELESS_COMPONENT',
				message: 'Is the component stateless ?',
				choices: ["Y", "N"],
				default: "N"
			},
			{
				type: 'list',
				name: 'STYLESHEET',
				message: 'Do you want to include a css stylesheet ?',
				choices: ['Y', 'N'],
				default: "N"
			},
			{
				type: 'list',
				name: 'FILES_TO_CREATE',
				message: 'Do you want to create a component and index file in the new component directory or place all of the logic into an index file ?',
				choices: ["Component and index.js", "index.js only"],
				default: "index.js only"
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
		var destinationPath = '';
		var templatePath = 'component.template';
		var componentPath = this.props.DIRECTORY_NAME + 'components/' + this.props.COMPONENT_NAME;
		if (this.props.FILES_TO_CREATE === 'index.js only') {
			destinationPath = componentPath + '/index.js';
		}
		else {
			destinationPath = componentPath + '/' + this.props.COMPONENT_NAME + '.js';
		}
		if (this.props.STATELESS_COMPONENT === 'Y') {
			templatePath += '-stateless';
		}

		this.fs.copyTpl(
			this.templatePath(templatePath + '.js'),
			this.destinationPath(destinationPath),
			this.props
		);

		if (this.props.WITH_CONTAINER === 'Y') {
			this.composeWith('react-redux-saga-cli:container', {
				options: {
					isNested: true,
					props: this.props
				}
			});
		}
		if (this.props.FILES_TO_CREATE !== 'index.js only') {
			this.composeWith('react-redux-saga-cli:componentIndex', {
					options: {
						props: Object.assign({}, this.props, {path: componentPath})
					}
				}
			);
		}
		if (this.props.STYLESHEET !== 'N') {
			this.composeWith('react-redux-saga-cli:stylesheet', {
				options: {
					isNested: true,
					props: Object.assign({}, this.props,
						{STYLESHEET_NAME: 'styles.scss'})
				}
			});
		}
	}
});
