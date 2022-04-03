// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX3QTl5Kkqxmk50HwDFmooYj-HNAhPtJE",
  authDomain: "ecommerce-361c5.firebaseapp.com",
  projectId: "ecommerce-361c5",
  storageBucket: "ecommerce-361c5.appspot.com",
  messagingSenderId: "11783232699",
  appId: "1:11783232699:web:868c3bf99acbb150e39d9e",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(fireBaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
