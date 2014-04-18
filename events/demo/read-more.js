$('a').on('click', function (e) {

  e.preventDefault();

  $('.extra-text').slideDown('fast');
  $(this).hide();

});
