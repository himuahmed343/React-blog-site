import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC5jNBAB9qrNZZ37VG-qHKHSJMNrCG38nw",
  authDomain: "blogproject-42d78.firebaseapp.com",
  projectId: "blogproject-42d78",
  storageBucket: "blogproject-42d78.appspot.com",
  messagingSenderId: "937453480904",
  appId: "1:937453480904:web:dda4a1979a9c94a987aefd",
  measurementId: "G-YL2YP9QJ8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

