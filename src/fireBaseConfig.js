// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBoXIRSZXuvbS9To9iSMDs0R366z5gUM-Y",

  authDomain: "moleculainfusiones-a7ae0.firebaseapp.com",

  projectId: "moleculainfusiones-a7ae0",

  storageBucket: "moleculainfusiones-a7ae0.appspot.com",

  messagingSenderId: "917748187208",

  appId: "1:917748187208:web:6271d3dd342f0f8f2c587d"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export  default db