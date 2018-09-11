var feedback = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
var message = popup.querySelector(".type-message");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");

  if (storage) {
    userName.value = storage;
    userEmail.value = storage;
    message.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  if (!userName.value || !email.value || !message.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});