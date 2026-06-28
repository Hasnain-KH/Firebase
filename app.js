import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./config/firebase.js";


let email = document.getElementById("email");
let password = document.getElementById("password");
let signup = document.getElementById("signup");


signup.addEventListener("click", () => {


    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((resp) => {
            const user = resp.user;
            console.log(user);
            location.href = "login/login.html";
        })


        .catch((error) => {
            const errorcode = error.code;
            const errorMessege = error.errorMessege;
            console.log("Error code" + errorcode);
            console.log("Error messege " + errorMessege);
        })

})





