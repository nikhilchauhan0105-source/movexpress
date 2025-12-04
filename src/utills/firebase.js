
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp0fybmqJO9LWlaWICFSD42TLfkhyRx64",
  authDomain: "moveexpres-test.firebaseapp.com",
  projectId: "moveexpres-test",
  storageBucket: "moveexpres-test.firebasestorage.app",
  messagingSenderId: "551212486210",
  appId: "1:551212486210:web:f10717b77898ef1b6ae7db",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log(app)

export const db = getFirestore(app);

export const realTimeDB = getDatabase(app);

export default app;