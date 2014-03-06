var exec = require("./exec");
var escape = require("any-shell-escape");

module.exports = function (opt) {
  if(!opt) opt = {};
  if(!opt.args) opt.args = '';

  // Return a stream
  return exec(function(file) {
    return {
      cmd: "git add " + escape([file.path]) + " " + opt.args,
      cwd: file.cwd
    };
  });
};
