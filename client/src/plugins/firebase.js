import { firebase } from '@firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyCy9q6UFE-Xi7VV9p9TzXi6CSDiiYqL_AQ',
  authDomain: 'complete-ci-poc.firebaseapp.com',
  projectId: 'complete-ci-poc',
  storageBucket: 'complete-ci-poc.appspot.com',
  messagingSenderId: '121768656322',
  appId: '1:121768656322:web:b1b2d75ed6f38c7f896a5b',
  measurementId: 'G-Q7D1WL2F9S'
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore;
const db = firebase.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const functions = firebase.functions();

if (location.hostname === 'localhost') {
  db.useEmulator('localhost', 9000);
  auth.useEmulator('http://localhost:9099/');
  functions.useEmulator('localhost', 5001);
}

export { db, auth, firestore, googleAuthProvider, functions };
