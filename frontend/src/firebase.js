import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDQkMiSHoxZw3CweoZ0PhEntOxnHdUHqX0',
  authDomain: 'dairydev-7bb95.firebaseapp.com',
  projectId: 'dairydev-7bb95',
  storageBucket: 'dairydev-7bb95.appspot.com',
  messagingSenderId: '326875779802',
  appId: '1:326875779802:web:9cbde58676e6a9f7470be3',
  measurementId: 'G-RHZSFV68XM',
};

// Initialize Firebase Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
