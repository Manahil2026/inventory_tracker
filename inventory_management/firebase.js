// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK_UH30uxwVb8Q18K646s5qGA_mzxi2Y4",
  authDomain: "inventory-management-c7df4.firebaseapp.com",
  projectId: "inventory-management-c7df4",
  storageBucket: "inventory-management-c7df4.appspot.com",
  messagingSenderId: "469066887754",
  appId: "1:469066887754:web:f5f2ae4f95ab90564c6cb3",
  measurementId: "G-ZDJDVJX9ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};