$(document).ready(function(){

  // Jquery variables
  var $nameInput = $('#name');
  var $mailInput = $('#mail');
  var $subjectInput = $('#subject');
  var $msgInput = $('#msg');

  // event listeners for background change functionality
  $nameInput.on('keyup', InputBackgroundChange);
  $mailInput.on('keyup', InputBackgroundChange);
  $subjectInput.on('keyup', InputBackgroundChange);
  $msgInput.on('keyup', InputBackgroundChange);

  // function application of background change
  function InputBackgroundChange() {
    if($(this).val()){
      $(this).css('background-color', 'white');
      $(this).css('color', '#4D766E');
    } else {
      $(this).css('background-color', '#4D766E');
      $(this).css('color', 'white');
    }
  }


  var $contactSend = $('#contact-send');
  // function to display input values in window alert or alert user of needed inputs
  $contactSend.on('click', contactValueAlert);
  function contactValueAlert(){
    if($nameInput.val() === '' || $mailInput.val() === '' || $subjectInput.val() === '' || $msgInput.val() === '') {
      alert("All required fields of the contact form have not been completed.")
    } else {
      alert(`${$nameInput.val()} \n ${$mailInput.val()} \n ${$subjectInput.val()} \n ${$msgInput.val()}`);
    }
  }

});