import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-dcff5.firebaseapp.com",
  projectId: "loginonecart-dcff5",
  storageBucket: "loginonecart-dcff5.firebasestorage.app",
  messagingSenderId: "803413354707",
  appId: "1:803413354707:web:e1e7a27dbfef7f77df8c26"
};

const app =  initializeApp(firebaseConfig);
const auth=  getAuth(app);
const provider = new  GoogleAuthProvider();

export {auth , provider};