// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDV-m1r2-R7YJDTtZjrmCOfo3LReHMWzdw",
    authDomain: "fullstackbookstore-f55c3.firebaseapp.com",
    projectId: "fullstackbookstore-f55c3",
    storageBucket: "fullstackbookstore-f55c3.appspot.com",
    messagingSenderId: "704374954491",
    appId: "1:704374954491:web:e8a8fe9f11b2b5708d135e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app;