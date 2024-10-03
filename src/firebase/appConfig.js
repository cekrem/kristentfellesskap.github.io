import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCuN5hhhx8NRAfvqh4YNnBPcmXNsSTGsl8',
  authDomain: 'kristentfellesskapio.firebaseapp.com',
  projectId: 'kristentfellesskapio',
  databaseURL:
    'https://kristentfellesskapio-default-rtdb.europe-west1.firebasedatabase.app/',
  storageBucket: 'kristentfellesskapio.appspot.com',
  messagingSenderId: '33529157174',
  appId: '1:33529157174:web:590559ba7730efd09baa97',
  measurementId: 'G-ZNY6LGH3FV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };
