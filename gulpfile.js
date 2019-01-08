var gulp           = require('gulp');
var sass           = require('gulp-sass');
var gutil          = require('gulp-util');
var rename         = require('gulp-rename');
var concat         = require('gulp-concat');
var notify         = require('gulp-notify');
var uglify         = require('gulp-uglify');
var sourcemaps     = require('gulp-sourcemaps');
var autoprefixer   = require('gulp-autoprefixer');
var mainBowerFiles = require('main-bower-files');
var imagemin       = require('gulp-imagemin');
var cleanCSS       = require('gulp-clean-css');

var paths = {
  scripts: ['assets/js/**/*'],
  fonts:   ['assets/fonts/*'],
  images:  ['assets/imgs/*'],
  styles:  ['assets/css/scss/style.scss'],
  html:    ['*.php']
};

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    // .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('build/js'))
});
gulp.task('vendorscripts', function() {
    return gulp.src([
        'bower_components/modernizr/modernizr.js',
        'bower_components/modernizr/feature-detects/css-objectfit.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/uikit/dist/js/uikit.min.js',
        'bower_components/swiper/dist/js/swiper.jquery.umd.js'
        // 'resource/js/library/jquery.fitvids.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(rename('site.vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))

  // with sourcemaps all the way down
  return gulp.src(mainBowerFiles())
    .pipe(concat('vendor.js'))
    .pipe(rename('site.vendor.js'))
    .pipe(gulp.dest('build/js'))
    // .pipe(livereload());
});

gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(rename('site.styles.css'))
        .on('error', notify.onError())
        .pipe(gulp.dest('build/css'))
        .pipe(notify("SCSS compiled: <%=file.relative%>"))

        // Clean & minify CSS
        .pipe(cleanCSS({debug: true}, function(details) {
          console.log(details.name + ': ' + details.stats.originalSize);
          console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename('site.styles.min.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(notify("SCSS minified: <%=file.relative%>"))
});

gulp.task('reloadHtml', function(){
  gulp.src(paths.html)
    // .pipe(livereload());
});



gulp.task('images', () =>
    gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest('build/imgs'))
);

gulp.task('fonts', () =>
    gulp.src(paths.fonts)
        .pipe(gulp.dest('build/fonts'))
);

gulp.task('watch', function() {
  // livereload.listen();
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch('assets/**/*.scss', ['styles']);
  gulp.watch(paths.html, ['reloadHtml']);
});

gulp.task('default', ['styles', 'vendorscripts', 'scripts','images','fonts']);
// gulp.task('watch', ['styles', 'scripts','watch']);
