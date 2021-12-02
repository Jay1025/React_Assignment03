import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDax-lrnkmH4z5sQyWf_GosYvnpY5W4wo",
  authDomain: "dictionary-9227a.firebaseapp.com",
  projectId: "dictionary-9227a",
  storageBucket: "dictionary-9227a.appspot.com",
  messagingSenderId: "36200075241",
  appId: "1:36200075241:web:61d8b31b66c5502ab3c578",
  measurementId: "G-CRSKJ39183"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};