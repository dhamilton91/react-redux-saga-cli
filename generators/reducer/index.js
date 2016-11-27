'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');


module.exports = yeoman.Base.extend({
	end: function () {
		this.composeWith('react-redux-saga-cli:reducerIndex');
	},
	prompting: function () {
		this.log(yosay("Creating Reducer"));
		var prompts = [
			{
				type: 'input',
				name: 'REDUCER_NAME',
				message: 'Reducer name ?',
				default: "DEFAULT_REDUCER_NAME"
			},
			{
				type: 'input',
				name: 'ACTION_NAME',
				message: 'Which action would you like to support ?',
				default: "DEFAULT_ACTION_NAME"
			}
		];

		if (!this.options.isNested) {
			return this.prompt(prompts).then(function (props) {
				this.props = Object.assign({}, props);
			}.bind(this));
		}
		else {
			this.props = Object.assign({}, this.options.props);
		}
	},

	writing: function () {
		this.composeWith('react-redux-saga-cli:action', {options: {isNested: true, props: this.props}});
		this.fs.copyTpl(
			this.templatePath('reducer.template.js'),
			this.destinationPath(state.REDUCERS_PATH + this.props.REDUCER_NAME + '.js'),
			this.props
		);
	}
});
