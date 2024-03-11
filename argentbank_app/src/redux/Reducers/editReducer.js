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

    // mise à jour du username
      .addCase(editUsername, (state, action) => {
        state.userData.userName = action.payload.userName;
        state.status = "SUCCEEDED";
      })

      // mise à jour des données utilisateur
      .addCase(updateUserData, (state, action) => {
        state.userData = action.payload.userData;
      })

      // Réinitialise les données de l'utilisateur lors de la déconnexion
      .addCase(logout, (state) => {
        state.userData = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          userName: ''
        };
        state.status = null;
      })

  });
  
export default editReducer;


