import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/';

const firebaseConfig = {
  apiKey: 'AIzaSyADBF29dra-aO3YWWk_brWSw6vsfeegGzc',
  authDomain: 'gamerappweb.firebaseapp.com',
  projectId: 'gamerappweb',
  storageBucket: 'gamerappweb.appspot.com',
  messagingSenderId: '74697405013',
  appId: '1:74697405013:web:16b55ac09cfdc857b35adc',
  measurementId: 'G-8T3BGFQ0MW',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
