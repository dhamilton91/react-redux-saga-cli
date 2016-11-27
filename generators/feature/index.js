'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

// In my-generator/generators/app/index.js
module.exports = require('yeoman-generator').Base.extend({
  prompting: function(){
      var prompts = [
        {
          type: 'list',
          name: 'FEATURE_TYPE',
          message: 'Component & Container or Reducer & Action ?',
          choices: ["1", "2"],
          default: "1"
        },
        {
          type: 'input',
          name: 'FEATURE_NAME',
          message: 'Feature name?',
          default: "DEFAULT_FEATURE_NAME"
        },
      ];

      return this.prompt(prompts).then(function (props) {
        if (props.FEATURE_TYPE === "1"){
          this.props = {
            COMPONENT_NAME: props.FEATURE_NAME,
            CONTAINER_NAME: props.FEATURE_NAME,
            FEATURE_TYPE:props.FEATURE_TYPE
          };
          return;
        }
        this.props = {
          ACTION_NAME: props.FEATURE_NAME,
          REDUCER_NAME: props.FEATURE_NAME,
          FEATURE_TYPE:props.FEATURE_TYPE
        };
      }.bind(this));
  },
  writing : function () {
    this.log("Let's create files for the feature");

    if (this.props.FEATURE_TYPE === "1") {
      this.composeWith('react-redux-saga-cli:component', {options: {isNested: true, props: this.props}});
      this.composeWith('react-redux-saga-cli:container', {options: {isNested: true, props: this.props}});
    }
    else {
      this.composeWith('react-redux-saga-cli:reducer', {options:{isNested: true, props: this.props}});
      this.composeWith('react-redux-saga-cli:action',  {options:{isNested: true, props: this.props}});
    }


  }
});
