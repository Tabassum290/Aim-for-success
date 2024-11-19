// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6IOrwPyuXQG5hpT9F1OxB2RFrWVDo3hw",
  authDomain: "aimforsuccess-ea731.firebaseapp.com",
  projectId: "aimforsuccess-ea731",
  storageBucket: "aimforsuccess-ea731.firebasestorage.app",
  messagingSenderId: "1007082794574",
  appId: "1:1007082794574:web:e688bba65b041c938e5d1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);