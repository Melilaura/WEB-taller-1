// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
const auth = getAuth();
console.log(app);

const signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit", e => {

    e.preventDefault();
    console.log("User created");
    const name = signInForm.name.value;
    const lastName = signInForm.lastName.value;
    const email = signInForm.email.value;
    const password = signInForm.password.value;
    createUser(name, lastName, email, password);
});

async function createUser(name, lastName, email, password) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        alert(`Bienvenido, usuario $(user.email)`);
        console.log(newUser);
    } catch (e) {

        if (e.code == auth / "weak-password") {
            alert("Tu contraseña debe tener al menos 6 caracteres")
        }

        if (e.code == auth / "email-already-in-use") {
            alert("Este correo ya se encuentra en uso")
        }
        console.log(e.code);
    }

}