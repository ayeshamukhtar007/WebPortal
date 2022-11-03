const admin=require('firebase-admin');

const { googleApplicationCredentials }= require('./settings');

const serviceAccount = require(googleApplicationCredentials);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const messaging = admin.messaging();
module.exports={messaging}