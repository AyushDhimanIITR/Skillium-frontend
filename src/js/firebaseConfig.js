// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4iwRpcSQVIyIXlEKAr5Tt_RRNU-XDQ-s",
  authDomain: "skillium-labs-512cb.firebaseapp.com",
  projectId: "skillium-labs-512cb",
  storageBucket: "skillium-labs-512cb.appspot.com",
  messagingSenderId: "1027670756644",
  appId: "1:1027670756644:web:738b223f1b1c4b0c0ef7b1",
  measurementId: "G-RF68TPB670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
const analytics = getAnalytics(app);