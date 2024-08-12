// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwazjXZgmuZRFzRSlfJfg85SfckAeXiw4",
  authDomain: "nextjs-portfolio-c1068.firebaseapp.com",
  databaseURL: "https://nextjs-portfolio-c1068-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nextjs-portfolio-c1068",
  storageBucket: "nextjs-portfolio-c1068.appspot.com",
  messagingSenderId: "431563579103",
  appId: "1:431563579103:web:bde0ff3fc2c2921ba6936a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };