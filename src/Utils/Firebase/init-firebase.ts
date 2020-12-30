import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/remote-config';

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

export const remoteConfig = firebase.remoteConfig();

remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
remoteConfig.defaultConfig = {
  button_comprar_experiment: false,
  banners_with_info_enabled: false,
};

remoteConfig.fetch();
remoteConfig.activate();
