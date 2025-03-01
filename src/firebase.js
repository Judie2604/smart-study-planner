// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB24QqEBJ2wV2coG5UBqJfTBcQ7rJKHOWY",
    authDomain: "smart-study-planner-a988d.firebaseapp.com",
    projectId: "smart-study-planner-a988d",
    storageBucket: "smart-study-planner-a988d.firebasestorage.app",
    messagingSenderId: "907129495172",
    appId: "1:907129495172:web:8f36fb959bede713072cd1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
