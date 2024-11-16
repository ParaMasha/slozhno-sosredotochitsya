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

function fonts() {
  return gulp.src('src/fonts/**/*.{woff,woff2}')
    .pipe(gulp.dest('dist/fonts'));
}

function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist',
    }
  });

  gulp.watch('src/**/*.html', html).on('change', browserSync.reload);
  gulp.watch('src/blocks/**/*.css', css).on('change', browserSync.reload);
  gulp.watch('src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}', images).on('change', browserSync.reload);
}

exports.serve = serve;

const build = gulp.series(clean, gulp.parallel(html, css, images, fonts));
exports.build = build;

exports.html = html;
exports.css = css;
exports.images = images;
exports.fonts = fonts;
