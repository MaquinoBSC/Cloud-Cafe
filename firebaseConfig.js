// Import the functions you need from the SDKs you need
import { firebase } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNHDk0mb_83QQmHyi5PcinWBWLx-KdXE0",
  authDomain: "cloud-cafe-4974c.firebaseapp.com",
  projectId: "cloud-cafe-4974c",
  storageBucket: "cloud-cafe-4974c.appspot.com",
  messagingSenderId: "336360726081",
  appId: "1:336360726081:web:84e551adf7668452d8b0c0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db= firebase.firestore();
db.settings({timestampsInSnapshots: true}); //Para trabajar con snapshot de firestore y no obtener errores o warnings en la consola