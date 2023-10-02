// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgqArHi8aPG0K57lNkFXvN7C2qrtl2Ccs",
  authDomain: "finance-tracker-1f467.firebaseapp.com",
  projectId: "finance-tracker-1f467",
  storageBucket: "finance-tracker-1f467.appspot.com",
  messagingSenderId: "997154743590",
  appId: "1:997154743590:web:e28f41b4db98847a3e4de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
