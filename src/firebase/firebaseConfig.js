import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1lyKCeE5iP6veDjlhZGHFUqEF1pXzl7Y",
  authDomain: "bright-vision-307403.firebaseapp.com",
  projectId: "bright-vision-307403",
  storageBucket: "bright-vision-307403.appspot.com",
  messagingSenderId: "14197896142",
  appId: "1:14197896142:web:3bb9588a50fb6fb2ffb19f",
  measurementId: "G-NKYRVJW1E2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
export { db, google, firebase };
