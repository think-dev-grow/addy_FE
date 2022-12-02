import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiLzE5UNDDZf9hTwGHHTnnNNDXnTzYGYU",
  authDomain: "mobile-auth-1f989.firebaseapp.com",
  projectId: "mobile-auth-1f989",
  storageBucket: "mobile-auth-1f989.appspot.com",
  messagingSenderId: "238244492574",
  appId: "1:238244492574:web:7077779be0de6f61bc450f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
