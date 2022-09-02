import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-NdiKb4imGWGqiv19Jk7_231TdN_ua6A",
  authDomain: "note-website-73c5e.firebaseapp.com",
  projectId: "note-website-73c5e",
  storageBucket: "note-website-73c5e.appspot.com",
  messagingSenderId: "466098904164",
  appId: "1:466098904164:web:7360dfb84587efeaa7d371",
  measurementId: "G-79LQLXDS54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
