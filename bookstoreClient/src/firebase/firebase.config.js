import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDV-m1r2-R7YJDTtZjrmCOfo3LReHMWzdw",
    authDomain: "fullstackbookstore-f55c3.firebaseapp.com",
    projectId: "fullstackbookstore-f55c3",
    storageBucket: "fullstackbookstore-f55c3.appspot.com",
    messagingSenderId: "704374954491",
    appId: "1:704374954491:web:e8a8fe9f11b2b5708d135e"
};

const app = initializeApp(firebaseConfig);
export  default app;
