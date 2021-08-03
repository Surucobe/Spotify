import firebase from 'firebase/app';
import 'firebase/auth';

 var firebaseConfig = {
    apiKey: process.env.FRB_API_KEY,
    authDomain: process.env.FRB_AUTH_DOMAIN,
    projectId: process.env.FRB_PROJECT_ID,
    storageBucket: process.env.FRB_BUCKET,
    messagingSenderId: process.env.FRB_MSG_SENDER_ID,
    appId: process.env.FRB_APP_ID
 };

 export const Firebase = firebase.initializeApp(firebaseConfig);