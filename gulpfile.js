const gulp = require('gulp');
const sass = require('gulp-sass');

// set up some simple tasts for gulp to run

function compile(done) {
    gulp.src("sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("css"))
}

exports.compile = compile





// var gulp = require ('gulp');
// gulp.task ('test', function () {
//     console.log ('this is a test');


// });