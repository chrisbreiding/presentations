var $ = require('jquery-browserify'),
    _ = require('underscore'),
    colors = require('./colors.js');

$(function () {

  _.each(colors, function (color) {
    $('ul').append('<li>' + color + '</li>');
  });

});
