'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');

module.exports = yeoman.Base.extend({
	prompting: function () {
		console.log(yosay('Creating Action'));
		var prompts = [
			{
				type: 'input',
				name: 'ACTION_NAME',
				message: 'Action name ?',
				default: "DEFAULT_ACTION_NAME"
			},
			{
				type: 'input',
				name: 'ACTION_CONSTANT',
				message: 'Action constant ?',
				default: "DEFAULT_ACTION_CONSTANT"
			},
			{
				type: 'input',
				name: 'REDUCER_NAME',
				message: 'Reducer name ?',
				default: "DEFAULT_REDUCER_NAME"
			}
		];

		if (!this.options.isNested) {
			return this.prompt(prompts).then(function (props) {
				this.props = props;
			}.bind(this));
		}
		else{
			this.props = this.options.props;
		}

	},
	writing: function () {
		this.fs.copyTpl(
			this.templatePath('action.template.js'),
			this.destinationPath(state.ACTION_PATH + this.props.ACTION_NAME + '.js'),
			this.props
		);
	}
});
