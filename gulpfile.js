'use strict';

var gulp = require('gulp');
var ioncoreTasks = require('ioncore-build');

ioncoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
