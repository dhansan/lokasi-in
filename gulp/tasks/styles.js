//////////////
// Required //
//////////////
var gulp 		     = require('gulp'),
    postcss      = require('gulp-postcss'),
    prefix       = require('autoprefixer'),
    cssvars      = require('postcss-simple-vars'),
    nested       = require('postcss-nested'),
    cssImport    = require('postcss-import');

//////////////////
// Styles  Task //
//////////////////
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, prefix]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
