const initialState = {
  isConnected: false,
 
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isConnected: true,
        // Autres traitements pour la connexion
      };
    case 'LOGOUT':
      return {
        ...state,
        isConnected: false,
        // Autres traitements pour la déconnexion
      };
    case 'SET_CONNECTED':
      return {
        ...state,
        isConnected: true,
      };
    default:
      return state;
  }
};

export default authReducer;