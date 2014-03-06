var exec = require("./exec");
var escape = require("any-shell-escape");
var gutil = require('gulp-util');

module.exports = function (version, message, opt) {
  if(!version) return cb(new Error('Version must be defined'));
  if(!message) return cb(new Error('Message must be defined'));
  if(!opt) opt = {};
  if(!opt.cwd) opt.cwd = process.cwd();
  if(!opt.args) opt.args = '';

  var signedarg = opt.signed ? ' -s ' : ' -a ';

  var cmd = 'git tag ' + signedarg + escape([version])+ ' -m "' + message + '" ' + opt.args;
  cmd = gutil.template(cmd, {file:message});

  // Return a stream
  return exec(function(file) {
    return {
      cmd: cmd,
      cwd: opt.cwd
    };
  });
};