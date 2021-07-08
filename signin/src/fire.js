import firebase from "firebase";



var firebaseConfig = {
    apiKey: "AIzaSyARQsdjySrSrYRChtzLnhRyyuXhYRXyu7s",
    authDomain: "signin-20d97.firebaseapp.com",
    projectId: "signin-20d97",
    storageBucket: "signin-20d97.appspot.com",
    messagingSenderId: "279033477537",
    appId: "1:279033477537:web:f964b8f7a83e459881b3e0"
  };
const fire = firebase.initializeApp(firebaseConfig);

export default fire;