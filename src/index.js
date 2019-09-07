$(document).ready(function(){
//selecting html elements for use in color change functions
document.getElementById("name").onkeydown = function() {nameInputBackgroundChange()};
document.getElementById("mail").onkeydown = function() {mailInputBackgroundChange()};
document.getElementById("subject").onkeydown = function() {subjectInputBackgroundChange()};
document.getElementById("msg").onkeydown = function() {msgInputBackgroundChange()};

//selecting html elements for use in reverting colors back to original color upon focus change
document.getElementById("name").onchange = function() {nameInputChange()};
document.getElementById("mail").onchange = function() {mailInputChange()};
document.getElementById("subject").onchange = function() {subjectInputChange()};
document.getElementById("msg").onchange = function() {msgInputChange()};

// functions to change input/text area color and background color based on userinput
function nameInputBackgroundChange() {
  var nameField = document.getElementById("name");
  nameField.style.backgroundColor = "white";
  nameField.style.color = "#4D766E";
}

function nameInputChange() {
  var nameField = document.getElementById("name");
  if (nameField.value === '') {
    nameField.style.backgroundColor = "#4D766E";
    nameField.style.color = "white";
  }
}

function mailInputBackgroundChange() {
  var mailField = document.getElementById("mail");
  mailField.style.backgroundColor = "white";
  mailField.style.color = "#4D766E";
}

function mailInputChange() {
  var mailField = document.getElementById("mail");
  if (mailField.value === '') {
    mailField.style.backgroundColor = "#4D766E";
    mailField.style.color = "white";
  }
}

function subjectInputBackgroundChange() {
  var subjectField = document.getElementById("subject");
  subjectField.style.backgroundColor = "white";
  subjectField.style.color = "#4D766E";
}

function subjectInputChange() {
  var subjectField = document.getElementById("subject");
  if (subjectField.value === '') {
    subjectField.style.backgroundColor = "#4D766E";
    subjectField.style.color = "white";
  }
}

function msgInputBackgroundChange() {
  var msgField = document.getElementById("msg");
  msgField.style.backgroundColor = "white";
  msgField.style.color = "#4D766E";
}

function msgInputChange() {
  var msgField = document.getElementById("msg");
  if (msgField.value === '') {
    msgField.style.backgroundColor = "#4D766E";
    msgField.style.color = "white";
  }
}

// function to display input values in window alert or alert user of needed inputs
document.getElementById("contact-send").onclick = function() {contactValueAlert()};

function contactValueAlert(){
  var nameField = document.getElementById("name");
  var mailField = document.getElementById("mail");
  var subjectField = document.getElementById("subject");
  var msgField = document.getElementById("msg");

  if(nameField.value === '' || mailField.value === '' || subjectField.value === '' || msgField.value === '') {
    alert("All required fields of the contact form have not been completed.")
  } else {
    alert(`${nameField.value} \n ${mailField.value} \n ${subjectField.value} \n ${msgField.value}`);
  }

}

//   // jQuery goes here...
//   $('.center').fadeToggle(1500);

//   setInterval(function() {
//     $('.center').fadeToggle(1500);
//   }, 1500);

});


