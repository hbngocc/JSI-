import {auth, dangky} from "./firebaseConfig.js";

const btnLogin = document.querySelector("#btnLogin");

loginBtn.addEventListener("click", fucntion () {
    let email = document.querySelector("#form2Example17");
    let pass = document.querySelector("#form2Example27");
    const message = dangky(auth, email.value, pass.value);
});
