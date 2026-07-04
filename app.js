import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./config/firebase.js";


let email = document.getElementById("email");
let password = document.getElementById("password");
let signup = document.getElementById("signup");


signup.addEventListener("click", () => {

    let emailvalue = email.value;
    let passwordvalue = password.value;

    createUserWithEmailAndPassword(auth, emailvalue, passwordvalue)
        .then((resp) => {
            const user = resp.user;
            console.log(user);
            location.href = "login/login.html";
        })
        .catch((error) => {
            const errorcode = error.code;
            const errorMessege = error.errorMessege;
            alert("atleast 6 digits are required ")
        })

})





