import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import {getFirestore} from "firebase/firestore";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3m3EqMq1zzRy2xkdSkEwTR7eqvW39ur0",
  authDomain: "react-55ea6.firebaseapp.com",
  databaseURL: "https://react-55ea6-default-rtdb.firebaseio.com",
  projectId: "react-55ea6",
  storageBucket: "react-55ea6.appspot.com",
  messagingSenderId: "1072214109722",
  appId: "1:1072214109722:web:6d54c32e867ce9d9376ba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();