// Firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmlSsg694hNlj_VbUIJmAqRMC6E-dupaI",
  authDomain: "petshop-d69fa.firebaseapp.com",
  databaseURL: "https://petshop-d69fa-default-rtdb.firebaseio.com",
  projectId: "petshop-d69fa",
  storageBucket: "petshop-d69fa.appspot.com",
  messagingSenderId: "588202027209",
  appId: "1:588202027209:web:357965798f96b1d8f24518",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app); // Certifique-se de exportar a função getAuth

export default app;
