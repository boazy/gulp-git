var exec = require("./exec");
var escape = require("any-shell-escape");

module.exports = function (remote, branch, opt, cb) {
  if(!branch) branch = 'master';
  if(!remote) remote = 'origin';
  if(!opt) opt = {};
  if(!opt.cwd) opt.cwd = process.cwd();
  if(!opt.args) args = '';

  var cmd = "git push " + escape([remote, branch]) + " " + opt.args;
  
  // Return a stream
  return exec(function(file) {
    return {
      cmd: cmd,
      cwd: opt.cwd
    };
  });
};