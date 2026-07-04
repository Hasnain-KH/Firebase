import { auth, signInWithEmailAndPassword } from "../config/firebase.js";
let login = document.getElementById("login");
let email = document.getElementById("loginemail");
let password = document.getElementById("loginpassword");
let showerror = document.getElementById("error");

login.addEventListener("click", () => {

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location.href = "./dashboard.html";

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            showerror.innerText = "invalid email or password";

        });
})
