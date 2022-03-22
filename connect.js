import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getDatabase, ref, set, child, update, remove, onValue, get } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";

const firebaseConfig = {
  apiKey: "**********_DWFSm_n7cOp1nXFDqfr0Z4",
  authDomain: "**********-a650d.firebaseapp.com",
  databaseURL: "https://**********-default-rtdb.firebaseio.com",
  projectId: "**********-a650d",
  storageBucket: "**********-a650d.appspot.com",
  messagingSenderId: "**********416332",
  appId: "1:********:web:e8c8a7bfe8be22ed1f8be9",
  measurementId: "**********5CV6RFL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const countRef = ref(db);
