var scssLint = require('broccoli-scss-lint');
var removeFiles = require('broccoli-file-remover');
var broccoli = require('broccoli');
var mergeTrees = require('broccoli-merge-trees');

//handle trees being strings or objects
function getConfigFileName (style_tree) {
  var config_file_name = "";

  if ( typeof style_tree === 'object' ){
    config_file_name = style_tree.dir + '/.scss-lint.yml'; 
  } else if ( typeof style_tree === 'string' ){
    config_file_name = style_tree + '/.scss-lint.yml';
  }

  return config_file_name;
}

/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-scsslint',
  treeFor: function(tree){

    if (tree === 'styles') {
      var trees = [];
      var style_root = this.app.trees.styles;
      var config_file = getConfigFileName(style_root);

      trees.push( style_root );
      return scssLint(
        mergeTrees(trees, { config: config_file } ), 
        {}
      );
    }

  }
};

