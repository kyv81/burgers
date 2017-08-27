var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src('css/*.css')
        .pipe( concatCss('style.css') )
        .pipe( minifyCss() )
        .pipe( rename('main.min.css') )
        .pipe ( gulp.dest('css/') );
})

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
        .pipe( concat('index.js') )
        .pipe( uglify() )
        .pipe( rename('main.min.js') )
        .pipe ( gulp.dest('js/') );
})
