var map = require('map-stream');
var gutil = require('gulp-util');
var exec = require('./exec');
var escape = require('any-shell-escape');

module.exports = function (branch, opt) {
  if(!opt) opt = {};
  if(!branch) throw new Error('gulp-git: Branch name is require git.checkout("name")');
  if(!opt.args) opt.args = '';
  
  // Return a stream
  return exec(function(file) {
    var cmd = "git checkout " + escape([branch]) + " " + opt.args;
    return {
      cmd: cmd,
      cwd: file.cwd
    };
  });
};
