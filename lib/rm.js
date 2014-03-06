var map = require('map-stream');
var gutil = require('gulp-util');
var exec = require('./exec');
var escape = require('any-shell-escape');

module.exports = function (opt) {
  if(!opt) opt = {};
  if(!opt.args) opt.args = '';
  
  // Return a stream
  return exec(function(file) {
    if (!file.path) cb(new Error('gulp-git: file is required'));
    var cmd = "git rm " + escape([file.path]) + " " + opt.args;
    return {
      cmd: cmd,
      cwd: file.cwd
    };
  });
};