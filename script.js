"use strict";

// Main Page
document.addEventListener("DOMContentLoaded", () => {
  // Find the element to display the time
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  function updateTime() {
    if (timeElement) {
      timeElement.textContent = Date.now();
    }
  }

  updateTime();

  setInterval(updateTime, 1000);
});

// Contact Us Page

let form = document.querySelector("#form");
let nameInput = document.querySelector("#fullName");
let mailInput = document.querySelector("#email");
let subjectInput = document.querySelector("#subject");
let messageInput = document.querySelector("#message");
let nameError = document.querySelector(".name-error");
let mailError = document.querySelector(".mail-error");
let subjectError = document.querySelector(".subject-error");
let messageError = document.querySelector(".message-error");
let submitButton = document.querySelector(".submit-button");
let successDiv = document.querySelector(".success-div");
let successButton = document.querySelector(".success-button");
let contactUsDiv = document.querySelector(".contactUs-div");
console.log(nameError);

// let nameReply = nameInput.value;
// let subjectReply = subjectInput.value;
// let messageReply = messageInput.value;

let nameFormat = /^[A-Za-z]+$/;
let numberFormat = /[^\d]/g;
let mailFormat = /^[A-Za-z,@0-9]+$/;

// form.addEventListener('submit', function(e){
//   e.preventDefault();
//   checkInputValidation();
// })

// function checkInputValidation () {
//   let mailTrim = mailInput.value.trim();
//   let nameTrim = nameInput.value.trim();
//   let subjectTrim = subjectInput.value.trim();
//   let messageTrim = messageInput.value.trim();

//   if (nameTrim === '') {
//     setErrorMessage(name, 'Name cannot be blank');
//   }else{
//     setSuccessMessage(name);
//   }
// }

// function setErrorMessage (input, message){
//   const ormControl =
// }

let validInput = () => {};

let mailChecker = () => {
  if (mailInput.value.match(mailFormat)) {
    successDiv.classList.add("showDiv");
    contactUsDiv.style.display = "none";
  } else {
    mailError.textContent = "Whoops, please input correct email format!";
    mailInput.style.border = "2px solid red";
    mailInput.style.transform = "scale(1.05);";
  }
};

submitButton.onclick = () => {
  if (
    nameInput.value &&
    nameInput.value.length <= 10 &&
    nameInput.value.match(nameFormat)
  ) {
    successDiv.classList.add("showDiv");
    contactUsDiv.style.display = "none";
  } else if (nameInput.value && nameInput.value.length > 10) {
    nameError.textContent = "Input less than 10 characters!";
    nameInput.style.border = "2px solid red";
  } else if (nameInput.value.match(numberFormat)) {
    nameError.textContent = "Input alphabets only";
    nameInput.style.border = "2px solid red";
  } else {
    nameError.textContent = "Required Field";
    nameInput.style.border = "2px solid red";
  }

  mailChecker();

  if (
    subjectInput.value &&
    subjectInput.value.length <= 10 &&
    subjectInput.value.match(nameFormat)
  ) {
    successDiv.classList.add("showDiv");
    contactUsDiv.style.display = "none";
  } else if (subjectInput.value && subjectInput.value.length > 10) {
    subjectError.textContent = "Input less than 10 characters!";
    subjectInput.style.border = "2px solid red";
  } else if (subjectInput.value.match(numberFormat)) {
    subjectError.textContent = "Input alphabets only";
    subjectInput.style.border = "2px solid red";
  } else {
    subjectError.textContent = "Required Field";
    subjectInput.style.border = "2px solid red";
  }

  if (
    messageInput.value &&
    messageInput.value.length <= 10 &&
    messageInput.value.match(nameFormat)
  ) {
    successDiv.classList.add("showDiv");
    contactUsDiv.style.display = "none";
  } else if (messageInput.value && messageInput.value.length > 10) {
    messageError.textContent = "Input less than 10 characters!";
    messageInput.style.border = "2px solid red";
  } else if (messageInput.value.match(numberFormat)) {
    messageError.textContent = "Input alphabets only";
    messageInput.style.border = "2px solid red";
  } else {
    messageError.textContent = "Required Field";
    messageInput.style.border = "2px solid red";
  }
};
// // function validText(reply) {

// // if (subjectReply === "") {
// //     subjectError.textContent = "Please, input a subject!";
// //     subjectInput.style.border = "2px solid red";
// //     subjectInput.style.transform = "scale(1.05);";
// //   } else {
// //     subjectError.textContent = "";
// //     subjectInput.style.border = "2px solid green";
// //   }

// //   if (messageReply === "") {
// //     messageError.textContent = "Please, input a message!";
// //     messageInput.style.border = "2px solid red";
// //     messageInput.style.transform = "scale(1.05);";
//   } else {
//     messageError.textContent = "";
//     messageInput.style.border = "2px solid green";

// validText(nameReply);
// validText(subjectReply);
// validText(messageReply);

successButton.onclick = () => {
  window.location.reload();
};
