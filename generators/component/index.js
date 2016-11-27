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
				message: 'Component name ?',
				default: "DEFAULT_COMPONENT_NAME"
			},
			{
				type: 'list',
				name: 'WITH_CONTAINER',
				message: 'With container ?',
				choices: ["Y", "N"],
				default: "N"
			},
			{
				type: 'list',
				name: 'PURE_COMPONENT',
				message: 'Pure component ?',
				choices: ["Y", "N"],
				default: "N"
			},
			{
				type: 'list',
				name: 'REACT_NATIVE',
				message: 'React Native component ?',
				choices: ["Y", "N"],
				default: "N"
			},
			{
				type: 'list',
				name: 'STYLESHEET',
				message: 'Include stylesheet ?',
				choices: ['Y', 'N'],
				default: "N"
			},
			{
				type: 'list',
				name: 'FILES_TO_CREATE',
				message: 'Create a component and index file in new component directory ?',
				choices: ["Component and index.js", "index.js only"],
				default: "index.js only"
			},
		];
		if (!this.options.isNested) {
			return this.prompt(prompts).then(function (props) {
				this.props = props;
			}.bind(this));
		}
		else {
			this.props = Object.assign({}, this.options.props, {PURE_COMPONENT: 'N', INDEX: 'N'});
		}
	},

	writing: function () {
		var destinationPath = '';
		var templatePath = 'component.template';
		if (this.props.FILES_TO_CREATE === 'index.js only') {
			destinationPath = state.COMPONENTS_PATH + '/' + this.props.COMPONENT_NAME + '/index.js';
		}
		else {
			destinationPath = state.COMPONENTS_PATH + '/' + this.props.COMPONENT_NAME + '/' + this.props.COMPONENT_NAME + '.js';
		}
		if (this.props.REACT_NATIVE === 'Y') {
			templatePath += '-rn';
		}
		if (this.props.PURE_COMPONENT === 'Y') {
			templatePath += '-pure';
		}

		this.fs.copyTpl(
			this.templatePath(templatePath + '.js'),
			this.destinationPath(destinationPath),
			this.props
		);
	},
	end: function () {
		if (this.props.WITH_CONTAINER === 'Y') {
			this.composeWith('react-redux-saga-cli:container', {
				options: {
					isNested: true,
					props: this.props
				}
			});
		}
		if (this.props.FILES_TO_CREATE !== 'index.js only') {
			this.composeWith('react-redux-saga-cli:componentIndex', {options: {props: this.props}});
		}
		if (this.props.STYLESHEET !== 'N') {
			this.composeWith('react-redux-saga-cli:stylesheet', {
				options: {
					isNested: true,
					props: Object.assign({}, this.props,
						{STYLESHEET_NAME: this.props.REACT_NATIVE === 'Y' ? 'stylesheet.js' : 'styles.scss'})
				}
			});
		}
	}
});
