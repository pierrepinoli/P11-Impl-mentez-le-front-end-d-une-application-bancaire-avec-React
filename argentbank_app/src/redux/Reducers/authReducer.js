import { createReducer } from '@reduxjs/toolkit';
import { login, logout, logfail } from '../Actions/authActions';

// Etat initial des états
const initialState = {
  isConnected: false,
  status: null,
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
    
});


export default authReducer;
