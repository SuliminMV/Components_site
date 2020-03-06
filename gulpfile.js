'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('browser-sync').create();

gulp.task('css',function () {
    return gulp.src('sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});

gulp.task('server',function () {
    server.init({
        server:'.',
        notify:false
    });

    gulp.watch('sass/*.scss', gulp.series('css')).on('change',server.reload);
    gulp.watch('*.html').on('change',server.reload);


});
