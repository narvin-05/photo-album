// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-KnXQBZeCCHQxIr7p4iv_khEuz0wjBcE",
  authDomain: "travel-a9588.firebaseapp.com",
  projectId: "travel-a9588",
  storageBucket: "travel-a9588.appspot.com",
  messagingSenderId: "74906202908",
  appId: "1:74906202908:web:d358742288730f0a3f40d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
