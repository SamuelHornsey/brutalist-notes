// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  connectAuthEmulator
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBadLCiKTA6Kq-nKaK--MEuFAOAB657y6E",
  authDomain: "samuel-hornsey.firebaseapp.com",
  projectId: "samuel-hornsey",
  storageBucket: "samuel-hornsey.appspot.com",
  messagingSenderId: "589409100751",
  appId: "1:589409100751:web:e02ad7010458f367ee28ba",
  measurementId: "G-SB0HV2CE48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();

if (process.env.NODE_ENV !== 'production' && process.env.REACT_APP_DISABLE_EMULATOR !== 'true') {
  console.warn('ENABLING EMULATOR');
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8081);
}

export const provider = new GithubAuthProvider();

export const signInWithGithub = () => signInWithPopup(auth, provider);
