var gulp = require('gulp');
var sass = require('gulp-sass');

var eyeglass = require("eyeglass")({
    importer: function(uri, prev, done) {
        done(sass.NULL);
    }
}, sass.compiler);

// Disable import once with gulp until we
// figure out how to make them work together.
eyeglass.enableImportOnce = false;

gulp.task('default', function() {
  return gulp.src('src/*.*')
    .pipe(sass(eyeglass.sassOptions()).on("error", sass.logError))
    .pipe(gulp.dest('dist'));
});
