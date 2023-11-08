import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "adminhostel-89db6.firebaseapp.com",
  projectId: "adminhostel-89db6",
  storageBucket: "adminhostel-89db6.appspot.com",
  messagingSenderId: "964859608925",
  appId: "1:964859608925:web:b6d6a06796e3d08d7ab2b4",
  measurementId: "G-RNTM1EVVP0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);