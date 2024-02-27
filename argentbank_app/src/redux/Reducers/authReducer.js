const initialState = {
   isConnected: false,
  };
  
  const authReducer = (state = initialState, action) => {
    console.log("Initial state:", state); // Vérifiez l'état initial dans la console
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isConnected: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          isConnected: false,
        };
      default:
        return state;
    }
  };
  export default authReducer;