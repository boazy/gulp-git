var gutil = require('gulp-util');
var exec = require('./exec');
var escape = require('any-shell-escape');

module.exports = function (opt, cb) {
  if(!opt) opt = {};
  if (!opt.cwd) opt.cwd = process.cwd();
  if (!opt.args) opt.args = '';

  var cmd = "git init " + opt.args;

  // Return a stream
  return exec(function(file) {
    return {
      cmd: cmd,
      cwd: opt.cwd
    };
  });
};