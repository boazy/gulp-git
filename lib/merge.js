var gutil = require('gulp-util');
var exec = require('./exec');
var escape = require('any-shell-escape');

module.exports = function (branch, opt, cb) {
  if(!opt) opt = {};
  if(!branch) return cb(new Error('gulp-git: Branch name is require git.merge("name")'));
  if(!opt.cwd) opt.cwd = process.cwd();
  if(!opt.args) opt.args = '';
  
  var cmd = "git merge " + escape([branch]) + " " + opt.args;

  // Return a stream
  return exec(function(file) {
    return {
      cmd: cmd,
      cwd: opt.cwd
    };
  });
};
