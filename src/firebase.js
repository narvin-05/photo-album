// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJdcw8LC6zoT7wR42NWEZUTW6Eus3ExRY",
  authDomain: "temp-a6328.firebaseapp.com",
  projectId: "temp-a6328",
  storageBucket: "temp-a6328.appspot.com",
  messagingSenderId: "638769302018",
  appId: "1:638769302018:web:a68e9cdddc0b77550db51b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
