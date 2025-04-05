import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc4lgDH0mzhiqoN1f-7hP8fFsoNCVTbtA",
  authDomain: "hackorate.firebaseapp.com",
  projectId: "hackorate",
  storageBucket: "hackorate.firebasestorage.app",
  messagingSenderId: "701452663479",
  appId: "1:701452663479:web:77a3c90aa134b096cceb32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);