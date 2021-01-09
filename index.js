// jshint esversion:6

const input = document.querySelector(".email-input");
const errorIcon = document.querySelector(".error");
const errorText = document.querySelector(".valid-note");
const btn = document.querySelector(".button");


btn.addEventListener("click", function() {

  if (!emailIsValid(input.value)) {
    errorIcon.style.display = "block";
    errorText.style.display = "block";
  } else {
    errorIcon.style.display = "none";
    errorText.style.display = "none";
  }

});

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}
