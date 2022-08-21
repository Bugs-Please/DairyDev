
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCSxKUAb1KR63CGtshHWaiGGNPhreW73AU",
    authDomain: "dairydev-7b313.firebaseapp.com",
    projectId: "dairydev-7b313",
    storageBucket: "dairydev-7b313.appspot.com",
    messagingSenderId: "1002807393284",
    appId: "1:1002807393284:web:0482713c51609a3be50951"
  };
  

// Initialize Firebase Auth
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth ,db};
