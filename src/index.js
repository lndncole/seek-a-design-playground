$(document).ready(function(){
//selecting html elements for use in color change functions

// functions to change input/text area color and background color based on userinput
document.getElementById("name").onkeydown = function() {nameInputBackgroundChange()};
function nameInputBackgroundChange() {
  var nameField = document.getElementById("name");
  nameField.style.backgroundColor = "white";
  nameField.style.color = "#4D766E";
}

document.getElementById("name").onchange = function() {nameInputChange()};
function nameInputChange() {
  var nameField = document.getElementById("name");
  if (nameField.value === '') {
    nameField.style.backgroundColor = "#4D766E";
    nameField.style.color = "white";
  }
}

document.getElementById("mail").onkeydown = function() {mailInputBackgroundChange()};
function mailInputBackgroundChange() {
  var mailField = document.getElementById("mail");
  mailField.style.backgroundColor = "white";
  mailField.style.color = "#4D766E";
}

document.getElementById("mail").onchange = function() {mailInputChange()};
function mailInputChange() {
  var mailField = document.getElementById("mail");
  if (mailField.value === '') {
    mailField.style.backgroundColor = "#4D766E";
    mailField.style.color = "white";
  }
}

document.getElementById("subject").onkeydown = function() {subjectInputBackgroundChange()};
function subjectInputBackgroundChange() {
  var subjectField = document.getElementById("subject");
  subjectField.style.backgroundColor = "white";
  subjectField.style.color = "#4D766E";
}

document.getElementById("subject").onchange = function() {subjectInputChange()};
function subjectInputChange() {
  var subjectField = document.getElementById("subject");
  if (subjectField.value === '') {
    subjectField.style.backgroundColor = "#4D766E";
    subjectField.style.color = "white";
  }
}
document.getElementById("msg").onkeydown = function() {msgInputBackgroundChange()};
function msgInputBackgroundChange() {
  var msgField = document.getElementById("msg");
  msgField.style.backgroundColor = "white";
  msgField.style.color = "#4D766E";
}

document.getElementById("msg").onchange = function() {msgInputChange()};
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

  if(nameField.value === '' || mailField.value === '' || subjectField.value ===
  '' || msgField.value === '') {
    alert("All required fields of the contact form have not been completed.")
  } else {
    alert(`${nameField.value} \n ${mailField.value} \n ${subjectField.value} \n
    ${msgField.value}`);
  }

}

//menu hover functipnality
//unable to get the classlist to toggle. When I click it activates, and i see
// the class list light up for the target ID eleme - but no actual toggle of class
document.getElementById("left-center-button").addEventListener("click", navPopOut);
function navPopOut(){
  console.log("hello");
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('#myDropdown')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


});
