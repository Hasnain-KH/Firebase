import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyByu1gpPpPXLFXco0nwn8bKoqZ18-NqNUM",
  authDomain: "login-sign-up-c8b72.firebaseapp.com",
  projectId: "login-sign-up-c8b72",
  storageBucket: "login-sign-up-c8b72.firebasestorage.app",
  messagingSenderId: "235946023714",
  appId: "1:235946023714:web:b8cabc1604155e56fce37b",
  measurementId: "G-V75S8SMLJ9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }



