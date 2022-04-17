// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC1enPZu2AJJ22xRUBUPyx_L1x23mAd2o",
  authDomain: "moleculainfusiones.firebaseapp.com",
  projectId: "moleculainfusiones",
  storageBucket: "moleculainfusiones.appspot.com",
  messagingSenderId: "197839876064",
  appId: "1:197839876064:web:81b99a1da03463135bc585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export  default db