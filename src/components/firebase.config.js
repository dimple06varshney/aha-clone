import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDUKRClsSgAHyzCQrhA2MNu3z8QMYgHt24",
    authDomain: "aha-clone-d97e5.firebaseapp.com",
    projectId: "aha-clone-d97e5",
    storageBucket: "aha-clone-d97e5.appspot.com",
    messagingSenderId: "899931912738",
    appId: "1:899931912738:web:f964ae56fe3a60ab12a87b",
    measurementId: "G-SFKB3Q4LG4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);