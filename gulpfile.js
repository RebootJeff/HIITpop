var gulp    = require('gulp');

var concat  = require('gulp-concat');
var del     = require('del'); // funny story: gulp-clean was deprecated in favor of gulp-rimraf which was deprecated in favor of gulp-del
var nodemon = require('gulp-nodemon');
var print   = require('gulp-print');

var clientJSFiles = 'client/app/**/*.js';
var serverJSFiles = [
  'server/**/*.js',
  '!server/test/*'
];
var htmlFiles = 'client/index.html';

gulp.task('clean:dist', function (cb) {
  del([
    'dist/**',
    '!dist/bower_components' // don't delete bower goodies
  ], cb);
});

gulp.task('compile:clientJS', function() {
  gulp.src(clientJSFiles)
    .pipe(print()) // TODO: these prints are showing up in wrong order (async?)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('compile:html', function() {
  gulp.src(htmlFiles)
    .pipe(print())
    .pipe(gulp.dest('./dist'));
});

gulp.task('compile', ['compile:clientJS', 'compile:html']);

gulp.task('server', function() {
  nodemon({ script: 'server/server.js' }).on('restart', function(){
    console.log('Server restarted.');
  });
});

gulp.task('watch', function() {
  console.log('Watching...');

  gulp.watch(clientJSFiles, ['compile:clientJS']).on('change', function(event){
    console.log('File', event.path, 'was', event.type);
  });
});

gulp.task('default', ['compile', 'server', 'watch']);
