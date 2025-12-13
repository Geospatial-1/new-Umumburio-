import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";


const firebaseConfig = {
apiKey: "AIzaSyAKNFEBMK9MF3-1P6hCsaE2aLKXIh7-nUw",

  authDomain: "newumumburio.firebaseapp.com",

  databaseURL: "https://newumumburio-default-rtdb.firebaseio.com",

  projectId: "newumumburio",

  storageBucket: "newumumburio.firebasestorage.app",

  messagingSenderId: "1094768102620",

  appId: "1:1094768102620:web:cbd03620a8c2eb7db6b819"

};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
