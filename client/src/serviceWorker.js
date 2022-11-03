export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('firebase-messaging-sw.js')
      .then(function (registration) {
          
        // eslint-disable-next-line no-console
        console.log('[SW]: SCOPE: ', registration.scope);
        return registration.scope;
      })
      .catch(function (err) {
        return err;
      });
  }
};
// export function showNotification() {
//   Notification.requestPermission(function(result) {
//     if (result === 'granted') {
//       navigator.serviceWorker.ready.then(function(registration) {
//         registration.showNotification('Vibration Sample', {
//           body: 'Buzz! Buzz!',
//           icon: '../images/touch/chrome-touch-icon-192x192.png',
//           vibrate: [200, 100, 200, 100, 200, 100, 200],
//           tag: 'vibration-sample'
//         });
//       });
//     }
//   });
// }