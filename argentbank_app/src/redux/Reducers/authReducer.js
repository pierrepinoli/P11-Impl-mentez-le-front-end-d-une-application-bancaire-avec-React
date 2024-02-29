import { createReducer } from '@reduxjs/toolkit';
import { login, logout, logfail, setRememberMe } from '../Actions/authActions';

// Etat initial des états
const initialState = {
  isConnected: false,
  status: null,
  rememberMe: false, 
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state) => {
      state.isConnected = true;
      state.status = "SUCCEEDED";
    })
    .addCase(logout, (state) => {
      state.isConnected = false;
      state.status = null;
    })
    .addCase(logfail, (state) => {
      state.isConnected = false;
      state.status = "FAILED";
    })
    .addCase(setRememberMe, (state, action) => {
      
      // Met à jour rememberMe selon l'action payload
      state.rememberMe = action.payload; 
    });
});

export default authReducer;
