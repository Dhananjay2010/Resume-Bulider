
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAFtAH600HjIdm-banH5B3Z7K0KTixeYgM",
    authDomain: "resume-builder-9294b.firebaseapp.com",
    projectId: "resume-builder-9294b",
    storageBucket: "resume-builder-9294b.appspot.com",
    messagingSenderId: "173270661839",
    appId: "1:173270661839:web:d407dcd4a281746b8555ba"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();