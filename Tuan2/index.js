import { auth, dangky, dangnhap } from "./firebaseConfig.js";

const loginBtn = document.querySelector("#btnLogin");
loginBtn.addEventListener("click", async function () {
  let emailInput = document.querySelector("#form2Example17");
  let passwordInput = document.querySelector("#form2Example27");
  let errorMessages = document.querySelectorAll(".errorMessage");
  let errorMessageEmail = errorMessages[0];
  let errorMessagePassword = errorMessages[1];
  const { isSuccess, infoMessage } = await dangnhap(
    auth,
    email.value,
    pass.value
  );
  console.log(infoMessage);
  if (isSuccess) {
    alert("Sign up successfully");
    errorMessageEmail.innerText = "";
    errorMessagePassword.innerText = "";
    email.classList.remove("errorMess");
    pass.classList.remove("errorMess");
  } else {
    if (infoMessage == "auth/missing-password") {
      email.classList.remove("errorMess");
      pass.classList.add("errorMess");
      errorMessagePassword.innerText = "Please enter your password";
      errorMessageEmail.innerText = "";
    }
    if (infoMessage == "auth/weak-password") {
      email.classList.remove("errorMess");
      pass.classList.add("errorMess");
      errorMessagePassword.innerText = "This password is weak";
      errorMessageEmail.innerText = "";
    }
    if (infoMessage == "auth/invalid-email") {
      pass.classList.remove("errorMess");
      email.classList.add("errorMess");
      errorMessageEmail.innerText = "Invalid Email";
      errorMessagePassword.innerText = "";
    }
    if (infoMessage == "auth/missing-email") {
      email.classList.add("errorMess");
      pass.classList.remove("errorMess");
      errorMessageEmail.innerText("Please enter your email");
      errorMessagePassword.innerText = "";
    }
  }
});



