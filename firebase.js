// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7QDLanGLmltZVk1ptb1KVhxlRaRLEA7I",
  authDomain: "insta-clone-1965c.firebaseapp.com",
  projectId: "insta-clone-1965c",
  storageBucket: "insta-clone-1965c.appspot.com",
  messagingSenderId: "127474222341",
  appId: "1:127474222341:web:655791b35cd95fdbf6e36c",
  measurementId: "G-LW4PTM66Y2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
