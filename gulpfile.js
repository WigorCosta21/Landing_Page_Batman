const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')


const compileSass = () => {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'))
}

const compileImages = () => {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

const compileJs = () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(compileSass, compileImages, compileJs)


exports.watch = () => {
  gulp.watch('./src/styles/*.scss', gulp.parallel(compileSass))
  gulp.watch('./src/images/**/*', gulp.parallel(compileImages))
  gulp.watch('./src/scripts/*.js', gulp.parallel(compileJs))
}