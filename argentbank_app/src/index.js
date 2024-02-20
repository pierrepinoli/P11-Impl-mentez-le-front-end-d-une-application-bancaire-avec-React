import { createRoot } from 'react-dom/client';
import React from 'react';

import { Provider } from 'react-redux';
import store from '../src/redux/Store/store.jsx'; // Importez le store que vous avez configuré

import App from './App';
import './sass/general.scss';

const root = createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
            <App />
      </Provider>
);
