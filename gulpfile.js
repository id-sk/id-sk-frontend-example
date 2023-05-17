'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(concat('main.scss'))
    .pipe(sass({includePaths:  'node_modules'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/styles'));
});
