var exec = require("./exec");
var escape = require("any-shell-escape");

module.exports = function (message, opt) {
  if(!opt) opt = {};
  if(!message) throw new Error('gulp-git: Commit message is required git.commit("commit message")');
  if(!opt.args) opt.args = '';
  
  // Return a stream
  return exec(function(file) {
    return {
      cmd: 'git commit -m "' + message + '" ' + escape([file.path]) + ' ' + opt.args,
      cwd: file.cwd
    };
  });
};