var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    startPath: "index.html"
  })
})

gulp.task('sass', function () {
  return gulp.src('assets/css/main.sass')
    .pipe(sass({
      onError: browserSync.notify
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('assets/css/*', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('index.html', browserSync.reload); 
  gulp.watch('assets/js/*.js', browserSync.reload); 
})