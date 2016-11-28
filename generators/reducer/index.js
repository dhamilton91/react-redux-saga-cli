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
				name: 'ACTION_CONSTANT',
				message: 'Action constant to include ?',
				default: "DEFAULT_ACTION_CONSTANT"
			},
			{
				type: 'list',
				name: 'ADD_ACTION',
				message: 'Create an action ?',
				choices: ["Y", "N"],
				default: "N"
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
		if(this.props.ADD_ACTION === "Y") {
			this.composeWith('react-redux-saga-cli:action', {options: {isNested: true,
				props: Object.assign({}, this.props, {ACTION_NAME: this.props.REDUCER_NAME})}});
		}
		this.fs.copyTpl(
			this.templatePath('reducer.template.js'),
			this.destinationPath(state.REDUCERS_PATH + this.props.REDUCER_NAME + '.js'),
			this.props
		);
	}
});
