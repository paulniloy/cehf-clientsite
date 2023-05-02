// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT4Hlnj5wof4izwY-gmNVWHfoPkfaFIBw",
  authDomain: "myassignmentten.firebaseapp.com",
  projectId: "myassignmentten",
  storageBucket: "myassignmentten.appspot.com",
  messagingSenderId: "321050981827",
  appId: "1:321050981827:web:09fc3d32b634b8b74a3976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app