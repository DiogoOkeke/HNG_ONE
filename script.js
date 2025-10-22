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

let nameInput = document.querySelector("#fullName");
let mailInput = document.querySelector("#email");
let subjectInput = document.querySelector("#subject");
let messageInput = document.querySelector("#message");
let nameError = document.querySelector(".name-error");
let mailError = document.querySelector(".mail-error");
let subjectError = document.querySelector(".subject-error");
let messageError = document.querySelector(".message-error");
console.log(nameError);

let nameReply = nameInput.value;
let subjectReply = subjectInput.value;
let messageReply = messageInput.value;

function validText(reply) {
  if (nameReply === "") {
    nameError.textContent = "Name Cannot Be Blank!";
    nameInput.style.border = "2px solid red";
    nameInput.style.transform = "scale(1.05);";
  } else {
    nameError.textContent = "";
    nameInput.style.border = "2px solid green";
  }

  if (subjectReply === "") {
    subjectError.textContent = "Please, input a subject!";
    subjectInput.style.border = "2px solid red";
    subjectInput.style.transform = "scale(1.05);";
  } else {
    subjectError.textContent = "";
    subjectInput.style.border = "2px solid green";
  }

  if (messageReply === "") {
    messageError.textContent = "Please, input a message!";
    messageInput.style.border = "2px solid red";
    messageInput.style.transform = "scale(1.05);";
  } else {
    messageError.textContent = "";
    messageInput.style.border = "2px solid green";
  }
}

validText(nameReply);
validText(subjectReply);
validText(messageReply);

let mailFormat = /^[A-Za-z,@0-9]+$/;
let mailChecker = () => {
  if (mailInput.value.match(mailFormat)) {
    mailInput.style.border = "2px solid green";
  } else {
    mailError.textContent = "Whoops, please input correct email format!";
    mailInput.style.border = "2px solid red";
    mailInput.style.transform = "scale(1.05);";
  }
};

mailChecker();
