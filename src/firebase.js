import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9Sb3s1GPCoN4h32bC2O-NcOkh4BtC10g",
  authDomain: "defyne-d9c50.firebaseapp.com",
  projectId: "defyne-d9c50",
  storageBucket: "defyne-d9c50.firebasestorage.app",
  messagingSenderId: "665866305659",
  appId: "1:665866305659:web:0de78e09d8f4c84bb822de",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
