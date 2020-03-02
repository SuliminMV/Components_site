'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css',function () {
    return gulp.src('sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});
