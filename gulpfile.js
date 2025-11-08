const { src, dest, watch, series, parallel } = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const browserSync = require('browser-sync').create();
const del = require('del');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const gulpIf = require('gulp-if');
const yargs = require('yargs');

const argv = yargs.argv;
const production = !!argv.prod;

const paths = {
  templates: {
    src: 'src/templates/',
    pages: 'src/templates/pages/*.njk',
    watch: 'src/templates/**/*.njk'
  },
  assets: {
    css: 'src/assets/css/**/*.css',
    js: 'src/assets/js/**/*.js',
    images: 'src/assets/images/**/*'
  },
  dest: 'dist'
};

function clean() {
  return del([paths.dest]);
}

function templates() {
  return src(paths.templates.pages)
    .pipe(data(function(file) {
      return {};
    }))
    .pipe(nunjucksRender({
      path: [paths.templates.src]
    }))
    .pipe(dest(paths.dest))
    .pipe(browserSync.stream());
}

function styles() {
  return src(paths.assets.css)
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(gulpIf(production, cleanCSS()))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.dest + '/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(paths.assets.js)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(gulpIf(production, uglify()))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.dest + '/js'))
    .pipe(browserSync.stream());
}

function images() {
  return src(paths.assets.images)
    .pipe(dest(paths.dest + '/images'))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: paths.dest
    },
    port: 3000,
    open: true,
    notify: false
  });

  watch(paths.templates.watch, templates);
  watch(paths.assets.css, styles);
  watch(paths.assets.js, scripts);
  watch(paths.assets.images, images);
}

const build = series(clean, parallel(templates, styles, scripts, images));
const dev = series(build, serve);

exports.clean = clean;
exports.build = build;
exports.default = dev;
