import { createReducer } from '@reduxjs/toolkit';
import { editUsername, logout, updateUserData } from '../Actions/editActions';

// Etat initial des états
const initialState = {
    userData: {
      email: '',
      firstName: '',
      lastName: '',
      userName: ''
    },
    status: null,
  };

const editReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(editUsername, (state, action) => {
        // Mettre à jour le nom d'utilisateur
        state.userData.userName = action.payload.userName;
        state.status = "SUCCEEDED";
      })
      .addCase(logout, (state) => {
        // Réinitialise les données de l'utilisateur lors de la déconnexion
        state.userData = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          userName: ''
        };
        state.status = null;
      })
      .addCase(updateUserData, (state, action) => {
        // Mettre à jour toutes les données de l'utilisateur
        state.userData = action.payload.userData;
      });
  });
  
export default editReducer;


