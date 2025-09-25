import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAgCGuGyuK90wI4HUzabiyP3r0Cku2fYE",
  authDomain: "docketbook-4bea2.firebaseapp.com",
  projectId: "docketbook-4bea2",
  storageBucket: "docketbook-4bea2.firebasestorage.app",
  messagingSenderId: "564524630397",
  appId: "1:564524630397:web:7215c86bc23780831ccc14",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
