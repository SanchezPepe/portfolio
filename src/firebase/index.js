// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCf2GmikHOVh-HjmkRAS5gNIbkw4eUyyts",
    authDomain: "jose-portfolio.firebaseapp.com",
    projectId: "jose-portfolio",
    storageBucket: "jose-portfolio.appspot.com",
    messagingSenderId: "732727982281",
    appId: "1:732727982281:web:5763e7f3f1a82de7acf518",
    measurementId: "G-4RGH8FRV9L"
  };

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth };