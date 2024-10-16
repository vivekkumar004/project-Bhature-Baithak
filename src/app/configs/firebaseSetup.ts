import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; 
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL5HoVay54dwaozB_DwzrB-vBuYIT0xCc",
  authDomain: "bhature-baithak.firebaseapp.com",
  projectId: "bhature-baithak",
  storageBucket: "bhature-baithak.appspot.com",
  messagingSenderId: "389476144565",
  appId: "1:389476144565:web:7c3371a886923a96f375fc",
  measurementId: "G-NMLEEM4N2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
