// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "vingo-food-delivery-2a8af.firebaseapp.com",
  projectId: "vingo-food-delivery-2a8af",
  storageBucket: "vingo-food-delivery-2a8af.firebasestorage.app",
  messagingSenderId: "432325703655",
  appId: "1:432325703655:web:60e6350d2a108c94dc6f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export {app,auth}