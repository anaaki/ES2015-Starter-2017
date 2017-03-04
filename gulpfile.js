var gulp = require('gulp');
var browserify = require('browserify');
var v_source = require('vinyl-source-stream');

gulp.task('build', function(){
  return browserify({
    entries: ['./client_src/app.js'],
    dubug: true
  })
  .transform('babelify', {presets: ['es2015']})
  .bundle()
  .pipe(v_source('bundle.js'))
  .pipe(gulp.dest('./client/'));
});

gulp.task('default', ['build'], function(){});