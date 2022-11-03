import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBk_F6j_RgE_CHrAhlhvsST7QljTqp2LK0",
  authDomain: "reactfirebase-faed1.firebaseapp.com",
  projectId: "reactfirebase-faed1",
  storageBucket: "reactfirebase-faed1.appspot.com",
  messagingSenderId: "758913531979",
  appId: "1:758913531979:web:29c7db36d0fd84649ccdce",
  measurementId: "G-V1RMPTJM7P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = firebase.database();
export const messaging = firebase.messaging();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
