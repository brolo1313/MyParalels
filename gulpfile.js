// const browserSync = require('browser-sync').create();
const ghPages = require('gulp-gh-pages');
let project_folder = "dist";
const { series, parallel } = require("gulp");
// import imagemin from "gulp-imagemin"

let gulp = require("gulp"),
  // watch = require('gulp-watch'),
  prefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify"),
  sass = require("gulp-sass")(require("sass")),
  sourcemaps = require("gulp-sourcemaps"),
  // rigger = require('gulp-rigger'),
  include = require("gulp-include"),
  cssmin = require("gulp-minify-css"),
//   imagemin = require("gulp-imagemin"),
  gulpPngquant = require("gulp-pngquant"),
  // pngquant = require('imagemin-pngquant'),
  rimraf = require("rimraf"),
  browserSync = require("browser-sync"),
  reload = browserSync.reload;

let path = {
  build: {
    html: project_folder + "/",
    php: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
  },
  src: {
    //Пути откуда брать исходники
    html: "src/*.html", //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    js: "src/js/main.js", //В стилях и скриптах нам понадобятся только main файлы
    style: "src/scss/all.scss",
    img: "src/img/**/*.*", //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
    php: "src/*.php",
  },
  watch: {
    //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: "src/**/*.html",
    js: "src/js/**/*.js",
    style: "src/style/**/*.scss",
    img: "src/img/**/*.*",
  },
  clean: "./build",
};

let config = {
  server: {
    baseDir: "./src",
  },
  tunnel: true,
  host: "localhost",
  port: 9000,
  logPrefix: "Frontend_Devil",
};

const html = function (done) {
  gulp
    .src(path.src.html) //Выберем файлы по нужному пути
    .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
    .pipe(reload({ stream: true })); //И перезагрузим наш сервер для обновлений
  done();
};

const php = function (done) {
  gulp
    .src(path.src.php) //Выберем файлы по нужному пути
    .pipe(gulp.dest(path.build.php)) //Выплюнем их в папку build
    .pipe(reload({ stream: true })); //И перезагрузим наш сервер для обновлений
  done();
};

const js = function (done) {
  gulp
    .src(path.src.js) //Найдем наш main файл
    .pipe(include()) //Прогоним через rigger
    // .pipe(sourcemaps.init()) //Инициализируем sourcemap
    .pipe(uglify()) //Сожмем наш js
    // .pipe(sourcemaps.write()) //Пропишем карты
    .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
    .pipe(reload({ stream: true })); //И перезагрузим сервер
  done();
};

const style = function styleBuild(done) {
  gulp
    .src(path.src.style) //Выберем наш all.scss
    // .pipe(sourcemaps.init()) //То же самое что и с js
    .pipe(sass()) //Скомпилируем
    .pipe(prefixer()) //Добавим вендорные префиксы
    .pipe(cssmin()) //Сожмем
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css)) //И в build
    .pipe(reload({ stream: true }));
  done();
};

const image = function (done) {
  gulp
    .src(path.src.img) //Выберем наши картинки
    .pipe(
      imagemin({
        //Сожмем их
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [gulpPngquant()],
        interlaced: true,
      })
    )
    .pipe(gulp.dest(path.build.img)) //И бросим в build
    .pipe(reload({ stream: true }));
  done();
};

gulp.task("clean", function (cb) {
  rimraf(path.clean, cb);
});

gulp.task("webserver", function () {
  browserSync(config);
});

let build = series(parallel(html, php, style, js));

exports.build = build;

// //Компилируем SCSS в CSS
// function styles() {
//   return gulp
//     .src("src/scss/**/*.scss")
//     .pipe(scss().on("error", scss.logError))
//     .pipe(gulp.dest("src/css"))
//     .pipe(browserSync.stream());
// }

// // //Обновляем при сохранении
// function watch() {
//     browserSync.init({
//         server: {
//             baseDir: "./src",
//             index: "/index.html"
//         }
//     });
//     gulp.watch('src/scss/**/*.scss', styles);
//     gulp.watch('./*.html').on('change',browserSync.reload);
//     gulp.watch('./js/**/*.js').on('change', browserSync.reload);
// }

gulp.task("deploy", function () {
  return gulp.src("./dist/**/*").pipe(ghPages());
});
