// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClSoTkwACPEYfLb1tmjP-w5lh0CPHYGlo",
  authDomain: "fir-project-9014c.firebaseapp.com",
  projectId: "fir-project-9014c",
  storageBucket: "fir-project-9014c.firebasestorage.app",
  messagingSenderId: "739086780954",
  appId: "1:739086780954:web:60154ac3b04334ed751fa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
