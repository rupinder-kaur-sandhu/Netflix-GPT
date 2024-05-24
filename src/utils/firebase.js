// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPdAxuMgUtHiRhm_L5-QZ9WcRnaMpYwP4",
  authDomain: "netflixgpt-5272b.firebaseapp.com",
  projectId: "netflixgpt-5272b",
  storageBucket: "netflixgpt-5272b.appspot.com",
  messagingSenderId: "473529498564",
  appId: "1:473529498564:web:914eddecd22bc3141e0291",
  measurementId: "G-BR75G1JQ5E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
