import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/rootReducer'; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // importe le localStorage

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // Ajoutez d'autres configurations ici si nécessaire
});

export const persistor = persistStore(store); // Exportez le persistor

export default store;