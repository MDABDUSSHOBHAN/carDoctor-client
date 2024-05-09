// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7PY8tOp1cG6S8_zne3ufFC1-yIFnsreQ",
  authDomain: "cars-doctor-82ef8.firebaseapp.com",
  projectId: "cars-doctor-82ef8",
  storageBucket: "cars-doctor-82ef8.appspot.com",
  messagingSenderId: "785746303207",
  appId: "1:785746303207:web:edafacbddc00f57b63aa42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app