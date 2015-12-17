var gulp = require("gulp");
var babel = require("gulp-babel");
var connect = require("gulp-connect");
var scss = require("gulp-sass");

gulp.task('connect', () => {
  connect.server({
    livereload: true,
    port: 1337
    });
});

gulp.task('es2015', () => {
  return gulp.src('js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('scss', () => {
  gulp.src('scss/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('html', () => {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['js/*.js'], ["es2015"]);
  gulp.watch(['scss/*.scss'], ["scss"]);
  gulp.watch(['*.html'], ["html"]);
});

gulp.task('default', ['connect', 'es2015', 'scss', 'watch']);