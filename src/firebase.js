import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-RHDqxbxqItsyfk-nKg14n3OJnLHytog",
  authDomain: "athletesinactionbiblestu-85fed.firebaseapp.com",
  projectId: "athletesinactionbiblestu-85fed",
  storageBucket: "athletesinactionbiblestu-85fed.appspot.com",
  messagingSenderId: "475837783090",
  appId: "1:475837783090:web:fd3ed077512571b695b02b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
