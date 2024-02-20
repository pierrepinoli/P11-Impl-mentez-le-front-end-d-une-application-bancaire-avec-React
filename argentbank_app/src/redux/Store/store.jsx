import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/reducers.jsx';

const store = configureStore({
  reducer: rootReducer,
  // Ajoutez d'autres options ici si nécessaire
});

export default store;