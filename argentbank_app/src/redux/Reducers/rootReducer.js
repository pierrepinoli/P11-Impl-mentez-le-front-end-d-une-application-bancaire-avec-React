import { combineReducers } from 'redux';
import authReducer from './authReducer';
import editReducer from './editReducer';
// Importez d'autres réducteurs ici si nécessaire

const rootReducer = combineReducers({
  auth: authReducer,
  edit: editReducer,
  // Ajoutez d'autres réducteurs ici si nécessaire
});

export default rootReducer;