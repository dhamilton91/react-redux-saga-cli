'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay('Creating middleware index.js'));
  },

  writing: function () {
    var middleware;
    try {
		middleware = fs.readdirSync(this.options.props.DIRECTORY_NAME + 'middleware');
      var indexFileIndex = middleware.indexOf('index.js');
      if (indexFileIndex > -1){
		  middleware.splice(indexFileIndex, 1);
      }
      var indexFileIndex = middleware.indexOf('.DS_Store');
      if (indexFileIndex > -1){
		  middleware.splice(indexFileIndex, 1);
      }
    }
    catch(err){
		middleware = [];
    }

    this.fs.copyTpl(
      this.templatePath('index.template.js'),
      this.destinationPath(this.options.props.DIRECTORY_NAME + 'middleware/index.js'),
      {middleware}
    );
  }
});
