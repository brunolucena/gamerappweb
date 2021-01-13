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

let remoteConfigLocal: firebase.remoteConfig.RemoteConfig | null = null;

if (typeof window !== 'undefined') {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  remoteConfigLocal = firebase.remoteConfig();

  remoteConfigLocal.settings.minimumFetchIntervalMillis = 3600000;
  remoteConfigLocal.defaultConfig = {
    banners_with_info_enabled: false,
  };

  remoteConfigLocal.fetch();
  remoteConfigLocal.activate();
}

export const remoteConfig: firebase.remoteConfig.RemoteConfig | null = remoteConfigLocal;
