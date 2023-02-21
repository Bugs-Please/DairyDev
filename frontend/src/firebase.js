
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

// const firebaseConfig = {
//     apiKey: "AIzaSyCSxKUAb1KR63CGtshHWaiGGNPhreW73AU",
//     authDomain: "dairydev-7b313.firebaseapp.com",
//     projectId: "dairydev-7b313",
//     storageBucket: "dairydev-7b313.appspot.com",
//     messagingSenderId: "1002807393284",
//     appId: "1:1002807393284:web:0482713c51609a3be50951"
//   };
  

// // Initialize Firebase Auth



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQkMiSHoxZw3CweoZ0PhEntOxnHdUHqX0",
  authDomain: "dairydev-7bb95.firebaseapp.com",
  projectId: "dairydev-7bb95",
  storageBucket: "dairydev-7bb95.appspot.com",
  messagingSenderId: "326875779802",
  appId: "1:326875779802:web:9cbde58676e6a9f7470be3",
  measurementId: "G-RHZSFV68XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth ,db};