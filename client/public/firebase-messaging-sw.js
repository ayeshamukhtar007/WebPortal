importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');

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

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
 
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    image:payload.data.image
  };

  return self.registration.showNotification(notificationTitle,notificationOptions)
});
// self.onMessageListener()
// .then((payload) => {
// //   const { title, body } = payload.data;
// //   toast.info(`${title}; ${body}`);
// // })
// .catch((err) => {
//   toast.error(JSON.stringify(err));
// });
messaging.onMessage=(payload)=>{
  console.log('sdsdasdasdas')
}

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});
