// Firebase 설정 - itq-internet 프로젝트
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsPXaiFCnAw1TMIgl5VOroQbv_OXsTc18",
  authDomain: "itq-internet.firebaseapp.com",
  projectId: "itq-internet",
  storageBucket: "itq-internet.firebasestorage.app",
  messagingSenderId: "886774732519",
  appId: "1:886774732519:web:c20218f730ccf111b3f442",
  measurementId: "G-ZXE7SS12N7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
