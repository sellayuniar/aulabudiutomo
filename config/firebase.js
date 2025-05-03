// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMZIgPiiQajiruYcEQinov8JUDCwDK78w",
  authDomain: "aula-boedi-oetomo.firebaseapp.com",
  projectId: "aula-boedi-oetomo",
  storageBucket: "aula-boedi-oetomo.firebasestorage.app",
  messagingSenderId: "626121592412",
  appId: "1:626121592412:web:dc9cd1128e945850b4a099",
  measurementId: "G-MKGZB0WT15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
