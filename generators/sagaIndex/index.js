'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
	prompting: function () {
		this.log(yosay('Creating sagas index.js'));
	},

	writing: function () {
		var components;
		try {
			components = fs.readdirSync(state.SAGAS_PATH);
			var indexFileIndex = components.indexOf('index.js');
			if (indexFileIndex > -1) {
				components.splice(indexFileIndex, 1);
			}
			var indexFileIndex = components.indexOf('.DS_Store');
			if (indexFileIndex > -1) {
				components.splice(indexFileIndex, 1);
			}
		}
		catch (err) {
			components = [];
		}

		this.fs.copyTpl(
			this.templatePath('index.template.js'),
			this.destinationPath(state.SAGAS_PATH + 'index.js'),
			{components}
		);
	}
});
