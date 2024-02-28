import { combineReducers } from 'redux';
import authReducer from './authReducer';
// Importez d'autres réducteurs ici si nécessaire

const rootReducer = combineReducers({
  auth: authReducer,
  // Ajoutez d'autres réducteurs ici si nécessaire
});

export default rootReducer;