'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
	prompting: function () {
		this.log(yosay('Creating reducers index.js'));
	},

	writing: function () {
		var reducers;
		try {
			reducers = fs.readdirSync(this.options.props.DIRECTORY_NAME + 'containers');
			var indexFileIndex = reducers.indexOf('index.js');
			if (indexFileIndex > -1) {
				reducers.splice(indexFileIndex, 1);
			}
			var indexFileIndex = reducers.indexOf('.DS_Store');
			if (indexFileIndex > -1) {
				reducers.splice(indexFileIndex, 1);
			}
		}
		catch (err) {
			reducers = [];
		}

		this.fs.copyTpl(
			this.templatePath('index.template.js'),
			this.destinationPath(this.options.props.DIRECTORY_NAME + 'rootReducer.js'),
			{reducers}
		);
	}
});
