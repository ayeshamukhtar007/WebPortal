const dotenv =require('dotenv');

dotenv.config();
 const connectionString = process.env.CONNECTION_STRING;
 const googleApplicationCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;
module.exports={connectionString,googleApplicationCredentials}