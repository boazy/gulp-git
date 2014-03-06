var map = require('map-stream'),
  gutil = require('gulp-util'),
  exec = require('child_process').exec;

module.exports = function(getCmd){
  return map(function (file, cb){
    var obj = getCmd(file),
        cwd = obj.cwd,
        opt = (cwd !== null) ? cwd : {};
    exec(obj.cmd, opt, function (err, stdout, stderr) {
      if (err) {
        gutil.log(err);
      }
      if (stderr) {
        gutil.log(stderr);
      }
      if (stdout) {
        gutil.log(stdout.trim());
      }
      cb(err, file);
    });
  });
};
