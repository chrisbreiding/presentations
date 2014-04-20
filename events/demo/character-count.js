$('textarea').on('keyup', function () {

  var currentTextarea = $(this);

  var characterCount = currentTextarea.val().length;

  currentTextarea.siblings('span').text(characterCount);

});
