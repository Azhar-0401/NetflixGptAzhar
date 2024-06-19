// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-mxmE4-VJj4OA23KiGr85E0i7GF_Pl58",
  authDomain: "netflixgpt-1d8c7.firebaseapp.com",
  projectId: "netflixgpt-1d8c7",
  storageBucket: "netflixgpt-1d8c7.appspot.com",
  messagingSenderId: "357317796670",
  appId: "1:357317796670:web:aac744e65b0f1f2044c26f",
  measurementId: "G-DV4WGSQ6J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();