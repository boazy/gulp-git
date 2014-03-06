var gutil = require('gulp-util');
var exec = require('./exec');
var escape = require('any-shell-escape');

module.exports = function (remote, url, opt, cb) {
  if(!url) cb(new Error('gulp-git: Repo URL is required git.addRemote("origin", "https://github.com/user/repo.git")'));
  if(!remote) remote = 'origin';
  if(!opt) opt = {};
  if(!opt.cwd) opt.cwd = process.cwd();
  if(!opt.args) opt.args = '';

  var cmd = "git remote add " + escape([remote, url]) + " " + opt.args;

  // Return a stream
  return exec(function(file) {
    return {
      cmd: cmd,
      cwd: opt.cwd
    };
  });
};