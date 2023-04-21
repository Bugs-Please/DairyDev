
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
  apiKey: "AIzaSyBZL3_oLlNNI2nmaMO17NRshJqpBu7pBkU",
  authDomain: "be-proj-69c77.firebaseapp.com",
  projectId: "be-proj-69c77",
  storageBucket: "be-proj-69c77.appspot.com",
  messagingSenderId: "388197888416",
  appId: "1:388197888416:web:b8279a9ec4eca728bc74c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth ,db};