// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCX6JaKUvwmi4H7glu94cdzrVCjh19X58",
    authDomain: "drmartens-store.firebaseapp.com",
    projectId: "drmartens-store",
    storageBucket: "drmartens-store.appspot.com",
    messagingSenderId: "225862597382",
    appId: "1:225862597382:web:15c049ba52d0fe9a36fc87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", e => {

    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    login(email, password);
    console.log("logIn");

});

async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);

    } catch (e) {

        console.log(e.code);
    }

}