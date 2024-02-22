import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/authReducer';

const store = configureStore({
  reducer: rootReducer,
  // Ajoutez d'autres configurations ici si nécessaire
});

export default store;