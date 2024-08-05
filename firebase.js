// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLYAH09zonTTdFx4LoSxsVLWkGz2ROlAo",
  authDomain: "pantry-app-fd470.firebaseapp.com",
  projectId: "pantry-app-fd470",
  storageBucket: "pantry-app-fd470.appspot.com",
  messagingSenderId: "515509937859",
  appId: "1:515509937859:web:7777bec896eb6b2a7e6476",
  measurementId: "G-B0T0K0BCWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}