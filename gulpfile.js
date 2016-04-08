'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var importer = require('node-sass-globbing');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
//var uglify = require('gulp-uglify');

var sass_config = {
	importer: importer,
	includePaths: [
		'node_modules/breakpoint-sass/stylesheets/',
		'node_modules/singularitygs/stylesheets/',
		'node_modules/compass-mixins/lib/'
	]
};

gulp.task('browser-sync', function() {
	browserSync.init({
		injectChanges: true,
		proxy: "http://data.researchspaces.ca/"
		//proxy: "drupal.local"
	});
	//gulp.watch("./sass/**/*.scss", ['sass']).on('change', browserSync.reload);
	gulp.watch("./sass/**/*.scss", ['sass']);
	gulp.watch("./css/**/*.css").on('change', browserSync.reload);
	//gulp.watch("./js/**/*.js", ['uglify']).on('change', browserSync.reload);
	gulp.watch("./js/**/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function () {
	gulp.src('./sass/**/*.scss')
						 .pipe(plumber())
						 .pipe(sourcemaps.init())
						 .pipe(sass(sass_config).on('error', sass.logError))
						 .pipe(autoprefixer({
						 browsers: ['last 2 version']
						 }))
						 .pipe(sourcemaps.write('.'))
						 .pipe(gulp.dest('./css'));
});


gulp.task('default', [ 'browser-sync']);
