var gulp        = require('gulp'),
    gp          = require('gulp-load-plugins')(),
    del         = require('del'),
    browserSync = require('browser-sync').create();     


gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(gp.sass.sync().on('error', gp.sass.logError))
     .pipe(gp.autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
     .on("error", gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error running something"
      }))
    .pipe(gp.csso())
    .pipe(gulp.dest('app/css'))

});
 
 
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    browserSync.watch('app',browserSync.reload)
});


gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/bootstrap/dist/js/bootstrap.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',

        ])
        .pipe(gp.concat('libs.min.js')) 
        .pipe(gulp.dest('app/js')); 
});


gulp.task('css-libs', gulp.series('sass'), function() {
    return gulp.src('app/css/libs.css')
        .pipe(gp.cssnano())
        .pipe(gulp.dest('app/css'));
});
 
gulp.task('imagemin', () =>
    gulp.src('app/img/*')
        .pipe(gp.imagemin([
            gp.imagemin.gifsicle({interlaced: true}),
            gp.imagemin.jpegtran({progressive: true}),
            gp.imagemin.optipng({optimizationLevel: 5}),
            gp.imagemin.svgo({
                plugins: [
                    {removeViewBox: false},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('dist/img'))
);

gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('app/*.html', gulp.series('sass'));
	gulp.watch('app/js/**/*.js', gulp.series('sass'));
})

gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('build', gulp.series(gulp.parallel('clean','sass','imagemin','scripts'), function() {
    return new Promise(function(resolve, reject) {

    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/libs.css'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

    resolve();
  });

}));

gulp.task('default',gulp.series(
	gulp.parallel('sass','css-libs','scripts'), 
	gulp.parallel('watch','serve')
));


