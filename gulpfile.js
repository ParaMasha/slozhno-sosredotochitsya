const gulp = require('gulp');
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();

function html() {
  return gulp.src('src/**/*.html')
        .pipe(plumber())
                .pipe(gulp.dest('dist/'))
}

function css() {
  return gulp.src('src/blocks/**/*.css')
        .pipe(plumber())
        .pipe(concat('bundle.css'))
                .pipe(gulp.dest('dist/'))
}

function images() {
  return gulp.src('src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}')
            .pipe(gulp.dest('dist/images'))
}

function clean() {
  return del('dist');
}

exports.html = html;
exports.css = css;
exports.images = images;
exports.clean = clean;