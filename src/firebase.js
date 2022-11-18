import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDoDGU9lD4mLJ_zn7Es84EgijwOVHvVYpI",
  authDomain: "resume-builder-ba7dd.firebaseapp.com",
  projectId: "resume-builder-ba7dd",
  storageBucket: "resume-builder-ba7dd.appspot.com",
  messagingSenderId: "495656014873",
  appId: "1:495656014873:web:dce1e4bb3b2df1d80d4688"
};
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);



  