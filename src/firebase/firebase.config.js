// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoCVHO7bsVQA3-19BKYV85GFgpBTkhuk0",
  authDomain: "imenu-5e6ac.firebaseapp.com",
  projectId: "imenu-5e6ac",
  storageBucket: "imenu-5e6ac.appspot.com",
  messagingSenderId: "564284873108",
  appId: "1:564284873108:web:c3fb2cb8a87d82ec3ed781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);