$('textarea').on('keyup', function () {

  var characterCount = $(this).val().length;

  $(this).siblings('p').find('span').text(characterCount);

});
