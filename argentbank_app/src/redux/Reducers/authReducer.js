import { createReducer } from '@reduxjs/toolkit';
import { login, logout, logfail } from '../Actions/authActions';

// Etat initial des états
const initialState = {
  isConnected: false,
  status: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder

   // passe l'etat siConnected à true
    .addCase(login, (state) => {
      state.isConnected = true;
      state.status = "SUCCEEDED";
    })

    // passe l'etat siConnected à false à la déconnection 
    .addCase(logout, (state) => {
      state.isConnected = false;
      state.status = null;
    })

    // passe l'etat siConnected à false quand la connection échoue
    .addCase(logfail, (state) => {
      state.isConnected = false;
      state.status = "FAILED";
    })
    
});

export default authReducer;
