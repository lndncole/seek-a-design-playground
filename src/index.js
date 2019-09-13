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
  $nameInput.on('keyup', invertInputColors);
  $mailInput.on('keyup', invertInputColors);
  $subjectInput.on('keyup', invertInputColors);
  $msgInput.on('keyup', invertInputColors);
  $contactSend.on('click', handleFormInputKeyUp);
  $dropMenuText.on('click', handleMenuColorChangeClick);


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

  function handleFormInputKeyUp() {
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
        // $('.sub-one').html('<div class="menu-drop"><div class="menu-text-container"><a class="menu-text">PROJECTS</a></div></div>');
        $('.sub-one', this).css('width', $(this).width());
    },
    function(){
        $('.sub-one',this).slideUp(100);
    }
  );

  function handleMenuColorChangeClick() {

    $(this).css('color', 'yellow');

    var div = document.getElementById('projectsdrop');

    console.log(div.childNodes);

    for (var i = 0; i <  div.childNodes.length; i++) {

        if ($(this).css('color') === 'yellow') {
          console.log('hello')
        }

    }

  }


});
