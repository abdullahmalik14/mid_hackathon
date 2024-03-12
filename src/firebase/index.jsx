import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAVDAoJIaeOWdVshjh1COXabD1hnbgQweU",
  authDomain: "practice-web-1127c.firebaseapp.com",
  projectId: "practice-web-1127c",
  storageBucket: "practice-web-1127c.appspot.com",
  messagingSenderId: "635121661123",
  appId: "1:635121661123:web:8b4c6198029e87294fde76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {auth,app,database}