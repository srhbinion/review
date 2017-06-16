var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var path = require('path');

//sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

//less
gulp.task('less', function () {
  return gulp.src('app/less/application.less')
    .pipe(less())
    .pipe(gulp.dest('app/dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//watch
gulp.task('watch', ['browserSync', 'less'], function (){
  gulp.watch('app/less/**/*.less', ['less']);
  gulp.watch('app/*.html', browserSync.reload);
  //gulp.watch('app/js/**/*.js', browserSync.reload);
})
