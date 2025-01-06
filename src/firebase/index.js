// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKmvAGm_RwirUGK1z07FbRBNJp3z8g10w",
  authDomain: "portfolio-ppsa.firebaseapp.com",
  projectId: "portfolio-ppsa",
  storageBucket: "portfolio-ppsa.firebasestorage.app",
  messagingSenderId: "87527033442",
  appId: "1:87527033442:web:a3ba32dbd2ec335c9bdf3b",
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
