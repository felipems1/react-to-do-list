import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl03acLgTC9tFa7F-XIxBdnEvWgS1de-M",
  authDomain: "to-do-list-57dcb.firebaseapp.com",
  projectId: "to-do-list-57dcb",
  storageBucket: "to-do-list-57dcb.appspot.com",
  messagingSenderId: "982531016549",
  appId: "1:982531016549:web:392a3ab002595b2763838c",
  measurementId: "G-6G83SLSYQY",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
