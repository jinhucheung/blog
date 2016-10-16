var gulp = require('gulp'),
  runSequence = require('run-sequence'),
  browserSync = require('browser-sync').create(),
  del = require('del'),
  compass = require('gulp-compass');

gulp.task('default', function() {
  return runSequence(['clean'], ['build'], ['serve', 'watch']);
});

gulp.task('clean', function(callback) {
  return del('./dist/', callback);
});

gulp.task('build', function(callback) {
  return runSequence(['compass', 'html'], callback);
});

gulp.task('compass', function() {
  return gulp.src('./src/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'src/stylesheets',
      sass: 'src/sass'
    }))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('html', function() {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist/'));
})

gulp.task('serve', function() {
  browserSync.init({
    server: './dist',
    port: 8888
  });
});

gulp.task('reload', function() {
  return browserSync.reload();
});

gulp.task('watch', function() {
  return gulp.watch([
    './src/**/*.html',
    './src/**/*.scss'
  ], function() {
    return runSequence(['build'], ['reload']);
  })
});