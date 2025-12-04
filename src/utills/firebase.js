
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2P7FS0q1_oRcFrRobx04DJ36Exy88Xzs",
  authDomain: "movexpress-projects.firebaseapp.com",
  projectId: "movexpress-projects",
  storageBucket: "movexpress-projects.firebasestorage.app",
  messagingSenderId: "424349322928",
  appId: "1:424349322928:web:b30ea9369b2022a0ddf575",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log(app)

export const db = getFirestore(app);

export const realTimeDB = getDatabase(app);

export default app;


