// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbpJt9mUK5pj8hO1tV_gc0ArVxy8cFEkk",
  authDomain: "simple-authentication-aeafa.firebaseapp.com",
  projectId: "simple-authentication-aeafa",
  storageBucket: "simple-authentication-aeafa.appspot.com",
  messagingSenderId: "519754420491",
  appId: "1:519754420491:web:27315a2a30148a0a34520e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;