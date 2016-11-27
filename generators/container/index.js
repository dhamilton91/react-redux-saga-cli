'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var state = require('../initialState');


module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay("Creating Container"));

    var prompts = [
      {
        type: 'input',
        name: 'COMPONENT_NAME',
        message: 'Component Name ?',
        default: "DEFAULT_COMPONENT_NAME"
      },
      {
        type: 'input',
        name: 'ACTION_NAME',
        message: 'Action Name ?',
        default: "DEFAULT_ACTION_NAME"
      },
      {
        type: 'input',
        name: 'REDUCER_NAME',
        message: 'Reducer Name ?',
        default: "DEFAULT_REDUCER_NAME"
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
    this.fs.copyTpl(
      this.templatePath('container.template.js'),
      this.destinationPath(state.CONTAINERS_PATH + this.props.COMPONENT_NAME + 'Container.js'),
      this.props
    );
  },
  end: function () {
    this.composeWith('react-redux-saga-cli:containerIndex');
  },
});
