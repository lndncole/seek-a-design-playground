$(document).ready(function(){

  // Selections:
  var $nameInput = $('#name');
  var $mailInput = $('#mail');
  var $subjectInput = $('#subject');
  var $msgInput = $('#msg');
  var $contactSend = $('#contact-send');

  // Event listeners:
  $nameInput.on('keyup', invertInputColors);
  $mailInput.on('keyup', invertInputColors);
  $subjectInput.on('keyup', invertInputColors);
  $msgInput.on('keyup', invertInputColors);
  $contactSend.on('click', handleFormButtonClick);

  // Event handlers:
  function invertInputColors() {
    if($(this).val()){
      $(this).css('background-color', 'white');
      $(this).css('color', '#4D766E');
    } else {
      $(this).css('background-color', '#4D766E');
      $(this).css('color', 'white');
    }
  }

  function handleFormButtonClick() {
    if(
      $nameInput.val() === '' ||
      $mailInput.val() === '' ||
      $subjectInput.val() === '' ||
      $msgInput.val() === ''
    ) {
      alert("All required fields of the contact form have not been completed.")
    } else {
      alert(`${$nameInput.val()} \n ${$mailInput.val()} \n ${$subjectInput.val()} \n ${$msgInput.val()}`);
    }
  }

});