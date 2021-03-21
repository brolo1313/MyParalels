const gulp = require('gulp');
const scss = require('gulp-sass');
const browserSync = require('browser-sync').create();
const ghPages = require('gulp-gh-pages');

//Компилируем SCSS в CSS
function styles() {
    return gulp.src('src/scss/**/*.scss') 
    .pipe(scss().on('error',scss.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

//Обновляем при сохранении
function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', styles);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

<<<<<<< HEAD
function deploy() {
    return gulp.src('./src/**/*')
      .pipe(ghPages());
};


exports.styles = styles;
exports.watch = watch;
exports.deploy = deploy;
=======
exports.styles = styles;
exports.watch = watch;
>>>>>>> a256423d820d84ff1f03aaf50a68e8f1852c683c






<<<<<<< HEAD


// gulp.task('deploy',  function () {
//     return gulp.src('./src/**/*')
//       .pipe(ghPages());
//   });
=======
gulp.task('deploy', async function () {
    return gulp.src('./src/**/*')
      .pipe(ghPages());
  });
>>>>>>> a256423d820d84ff1f03aaf50a68e8f1852c683c

