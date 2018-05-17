//////////////
// Required //
//////////////

var gulp 		     = require('gulp'),
    watch        = require('gulp-watch'),
    postcss      = require('gulp-postcss'),
    prefix       = require('autoprefixer'),
    cssvars      = require('postcss-simple-vars'),
    nested       = require('postcss-nested'),
    cssImport    = require('postcss-import'),
    browserSync   = require ('browser-sync').create();



//////////////////
// Default Task //
//////////////////
gulp.task('default', function(){
  console.log("Test berhasil");
});

gulp.task('html', function(){
  console.log("HTML");
});

//////////////////
// Styles  Task //
//////////////////
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, prefix]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
  watch('./app/index.html', function(){
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
