// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABb3PXEGcQ1RfUehq3DJs1QEnWB7EnWn4",
  authDomain: "shopify-6bf15.firebaseapp.com",
  projectId: "shopify-6bf15",
  storageBucket: "shopify-6bf15.appspot.com",
  messagingSenderId: "78592549514",
  appId: "1:78592549514:web:c66346a6d7fd9b77c00373",
  measurementId: "G-1T821YX0Q1",
};

// Initialize Firebase

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
