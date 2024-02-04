import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAIdjtNy8VyXnAqBjs21PEF5kuXxnHFf4",
  authDomain: "loginapp-e06f3.firebaseapp.com",
  projectId: "loginapp-e06f3",
  storageBucket: "loginapp-e06f3.appspot.com",
  messagingSenderId: "708170647107",
  appId: "1:708170647107:web:2420cbeeed5ab4595136f6",
  measurementId: "G-S5S7643Q3E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
