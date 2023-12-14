const email = document.querySelector(".input-email");
const password = document.querySelector(".input-password");
const passwordVisibilty = document.querySelector(".password-visibilty ");
const passwordCont = document.querySelector(".password-cont");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

function isValidInput(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  if (emailRegex.test(input) || phoneRegex.test(input)) {
    return false;
  }
  return true;
}

email.addEventListener("input", function () {
  if (InputDeviceInfo.value !== "" && isValidInput(email.value)) {
    emailError.style.display = "block";
    email.style.borderBottom = "2px solid #e87c03";
  } else {
    emailError.style.display = "none";
    email.style.borderBottom = "none";
  }
});

password.addEventListener("input", function () {
  if (
    (password.value !== "" && password.value.length < 4) ||
    password.value.length > 60
  ) {
    password.style.borderBottom = "2px solid #e87c03";
    passwordError.style.display = "block";
  } else {
    password.style.borderBottom = "none";
    passwordError.style.display = "none";
  }
});

let isHidden = true;
passwordVisibilty.addEventListener("mousedown", function (event) {
  isHidden = !isHidden;
  password.type = isHidden ? "password" : "text";
  passwordVisibilty.innerHTML = isHidden ? "SHOW" : "HIDE";
  event.preventDefault();
});

password.addEventListener("focus", function () {
  passwordVisibilty.style.display = "block";
});

password.addEventListener("blur", function () {
  isHidden = true;
  password.type = isHidden ? "password" : "text";
  passwordVisibilty.innerHTML = isHidden ? "SHOW" : "HIDE";
  passwordVisibilty.style.display = "none";
});

const check = document.querySelector(".fa-check");
const checkBox = document.querySelector(".checkbox");
let isChecked = false;
checkBox.addEventListener("click", function () {
  check.style.color = isChecked ? "rgba(0,0,0,0)" : "#333";
  isChecked = isChecked ? false : true;
});
