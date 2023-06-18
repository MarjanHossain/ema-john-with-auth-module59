// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADuNxjvuADaTu1OWrfZQaf3n6egJuhbR0",
  authDomain: "ema-john-simple-46505.firebaseapp.com",
  projectId: "ema-john-simple-46505",
  storageBucket: "ema-john-simple-46505.appspot.com",
  messagingSenderId: "65910129794",
  appId: "1:65910129794:web:83a242ab742f2026e4e09b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;