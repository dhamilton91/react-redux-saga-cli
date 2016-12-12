'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
	prompting: function () {
		this.log(yosay('Creating sagas index.js'));
	},

	writing: function () {
		var sagas;
		try {
			sagas = fs.readdirSync(this.options.props.DIRECTORY_NAME + 'containers');
			var indexFileIndex = sagas.indexOf('index.js');
			if (indexFileIndex > -1) {
				sagas.splice(indexFileIndex, 1);
			}
			var indexFileIndex = sagas.indexOf('.DS_Store');
			if (indexFileIndex > -1) {
				sagas.splice(indexFileIndex, 1);
			}
		}
		catch (err) {
			sagas = [];
		}

		this.fs.copyTpl(
			this.templatePath('index.template.js'),
			this.destinationPath(this.options.props.DIRECTORY_NAME + 'rootSaga.js'),
			{sagas}
		);
	}
});
