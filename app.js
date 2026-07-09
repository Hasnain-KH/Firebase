import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import {
    getFirestore,
    doc,
    setDoc
} from "firebase/firestore";

// Your Firebase Config
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
const db = getFirestore(app);

// DOM Elements
const toggleSignup = document.getElementById('toggleSignup');
const toggleLogin = document.getElementById('toggleLogin');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const signupName = document.getElementById('signupName');
const signupFather = document.getElementById('signupFather');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const signupError = document.getElementById('signupError');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginError = document.getElementById('loginError');

// Toggle Function
function setActiveForm(form) {
    if (form === 'signup') {
        toggleSignup.classList.add('active');
        toggleLogin.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    } else {
        toggleLogin.classList.add('active');
        toggleSignup.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    }
    signupError.innerText = '';
    loginError.innerText = '';
}

toggleSignup.addEventListener('click', () => setActiveForm('signup'));
toggleLogin.addEventListener('click', () => setActiveForm('login'));

// Sign Up
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    signupError.innerText = '';

    const name = signupName.value.trim();
    const father = signupFather.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value;

    if (password.length < 6) {
        signupError.innerText = 'Password must be at least 6 characters.';
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            name: name,
            fatherName: father,
            email: user.email,
            uid: user.uid
        });

        // SweetAlert (global variable – make sure CDN script is in HTML)
        if (typeof Swal !== 'undefined') {
            await Swal.fire({
                icon: 'success',
                title: 'Account Created!',
                text: `Welcome, ${name}! Please log in.`,
                background: '#1a2333',
                color: '#fff',
                confirmButtonColor: '#4f46e5'
            });
        } else {
            alert('Account created! Please log in.');
        }

        // ✅ Switch to Login form (toggle)
        setActiveForm('login');
        signupForm.reset();

        // If you want to redirect to a separate page, use this instead:
        // window.location.href = "login.html"; // or "dashboard.html"

    } catch (error) {
        console.error(error);
        if (error.code === 'auth/email-already-in-use') {
            signupError.innerText = 'This email is already registered.';
        } else if (error.code === 'auth/weak-password') {
            signupError.innerText = 'Password is too weak (min 6 chars).';
        } else {
            signupError.innerText = 'Something went wrong. Please try again.';
        }
    }
});

// Log In
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.innerText = '';

    const email = loginEmail.value.trim();
    const password = loginPassword.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (typeof Swal !== 'undefined') {
            await Swal.fire({
                icon: 'success',
                title: 'Welcome Back!',
                text: `Logged in as ${user.email}`,
                background: '#1a2333',
                color: '#fff',
                confirmButtonColor: '#4f46e5',
                timer: 1500,
                showConfirmButton: false
            });
        }

        // Redirect to dashboard (uncomment when ready)
        window.location.href = "dashboard/dashboard.html";

    } catch (error) {
        console.error(error);
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            loginError.innerText = 'Invalid email or password.';
        } else {
            loginError.innerText = 'Login failed. Please try again.';
        }
    }
});