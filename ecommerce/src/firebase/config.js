import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYnGHG7aXH_lQAUj4zKoHH-3mbf4Lq8vY",
  authDomain: "ecommerce-382a6.firebaseapp.com",
  projectId: "ecommerce-382a6",
  storageBucket: "ecommerce-382a6.firebasestorage.app",
  messagingSenderId: "1036291600538",
  appId: "1:1036291600538:web:25671a05cb93e636d72f23",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
