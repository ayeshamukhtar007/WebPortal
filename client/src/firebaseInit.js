import firebase from 'firebase/app';
import 'firebase/messaging';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tos from './toast';
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

const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
console.log('hello')
  new Promise((resolve) => {
  
    firebase.messaging().onMessage((payload)=> {
      console.log('payload')
      toast.success('Activity Detected')
  
      resolve(payload);
    });
    console.log('after')

  });
