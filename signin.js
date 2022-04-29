// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { login, createUser, addUSerToDatabase } from "./src/scripts/auth"
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
const db = getFirestore(app);
//console.log(app);

const signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", async(e) => {

    e.preventDefault();

    console.log("User created");

    const name = signInForm.name.value;
    const lastName = signInForm.lastName.value;
    const email = signInForm.email.value;
    const password = signInForm.password.value;

    const newUser = {
        name,
        lastName,
        email,
        password,
        isAdmin: false
    }

    const userCreated = await createUser(auth, newUser);
    await addUSerToDatabase(db, userCreated.uid, newUser);
    //console.log(userCreated);
    //createUser(auth, newUser);
    alert(`Bienvenido, ${name +" "+ lastName}`);
});