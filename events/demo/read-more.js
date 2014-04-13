$('a').on('click', function (calamari) {

  calamari.preventDefault();

  $('.extra-text').slideDown('fast');
  $(this).hide();

});
