import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
import './Utils/init-firebase';

const tagManagerArgs = {
  gtmId: 'GTM-MHFRZPC',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
