$(document).ready(function(){

  // Selections:
  var $nameInput = $('#name');
  var $mailInput = $('#mail');
  var $subjectInput = $('#subject');
  var $msgInput = $('#msg');
  var $contactSend = $('#contact-send');
  var $menu = $(".menu");
  var $subOne = $('.sub-one');
  var $dropMenuText = $('.drop-menu-text');

  // Event listeners:
  $nameInput.on('keyup', handleFormInputKeyUp);
  $mailInput.on('keyup', handleFormInputKeyUp);
  $subjectInput.on('keyup', handleFormInputKeyUp);
  $msgInput.on('keyup', handleFormInputKeyUp);
  $contactSend.on('click', handleFormButtonClick);
  $dropMenuText.on('click', handleMenuColorChangeClick);

  // Event handlers:
  function handleFormInputKeyUp() {
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

  $menu.hover(
    function(){
        $('.sub-one', this).slideDown(300);
        $('.sub-one', this).css('width', $(this).width());
    },
    function(){
        $('.sub-one',this).slideUp(100);
    }
  );

  function handleMenuColorChangeClick() {
    $( ".drop-menu-text" ).each(function( index ) {
      $( this ).css('color', 'white');
    });
    $(this).css('color', 'yellow');
  }

});