import firebase from 'firebase/app';
import 'firebase/firestore';
require('dotenv').config()

var firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: "speechtotext-5fc34",
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  export default db

  