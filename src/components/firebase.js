// import firebase from "firebase"
// import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYT5wtx4rqOnOl9LI4sa92jqFhI6bopX0",
    authDomain: "whatsapp-clone-a5d2c.firebaseapp.com",
    projectId: "whatsapp-clone-a5d2c",
    storageBucket: "whatsapp-clone-a5d2c.appspot.com",
    messagingSenderId: "756756901029",
    appId: "1:756756901029:web:49160cbb4e7ce1a96af14c",
    measurementId: "G-V6PRFLDGLX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

