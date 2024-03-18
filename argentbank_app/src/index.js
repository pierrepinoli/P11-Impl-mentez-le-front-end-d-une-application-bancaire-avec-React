import React from 'react';
import { createRoot } from 'react-dom/client'; 

// permet de fournir le store Redux à l'ensemble de l'application React
import { Provider } from 'react-redux';

import store from '../src/redux/Store/store.js'; 
import App from './App';

import './sass/general.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);