// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQwetG2VAQL-pHsTJc0z-kvsldG5VljEE",
  authDomain: "shopping-42102.firebaseapp.com",
  projectId: "shopping-42102",
  storageBucket: "shopping-42102.appspot.com",
  messagingSenderId: "836792433524",
  appId: "1:836792433524:web:b2d774d718876abfef4a21",
  measurementId: "G-SCZ0XZQ4QD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);