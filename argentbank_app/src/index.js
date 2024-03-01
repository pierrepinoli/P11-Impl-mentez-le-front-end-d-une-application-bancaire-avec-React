import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../src/redux/Store/store.js'; 
import App from './App';
import './sass/general.scss';

const root = createRoot(document.getElementById('root')); // Utilisez createRoot au lieu de ReactDOM.render

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);