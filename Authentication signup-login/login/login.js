
import { auth, signInWithEmailAndPassword } from "./config/firebase.js";
let login = document.getElementById("login");
let email = document.getElementById("loginemail");
let password = document.getElementById("loginpassword");

login.addEventListener("click", () => {

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    window.location.href = "./dashboard.html";
})
