// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkucPn3gXPwPpeYpACVBAM3Fl_F9kk7ng",
  authDomain: "helloworld-1f9a0.firebaseapp.com",
  projectId: "helloworld-1f9a0",
  storageBucket: "helloworld-1f9a0.appspot.com",
  messagingSenderId: "698446214886",
  appId: "1:698446214886:web:b28d62f02e6816f298ed27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app