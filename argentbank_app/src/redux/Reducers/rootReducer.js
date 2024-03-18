import { combineReducers } from 'redux';
import authReducer from './authReducer';
import editReducer from './editReducer';


//combine les reducers et raccourci le nom des reducers dans des constantes
const rootReducer = combineReducers({
  auth: authReducer,
  edit: editReducer,
});

export default rootReducer;