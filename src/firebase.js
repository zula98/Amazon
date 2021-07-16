// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBd8UFojh1tMBQK3J2jKoLwctjtfVwYrFQ",
  authDomain: "clone-front-6025d.firebaseapp.com",
  projectId: "clone-front-6025d",
  storageBucket: "clone-front-6025d.appspot.com",
  messagingSenderId: "271373672274",
  appId: "1:271373672274:web:5496d0aa7cacedff95a48b",
  measurementId: "G-LTMFFHLHYE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
