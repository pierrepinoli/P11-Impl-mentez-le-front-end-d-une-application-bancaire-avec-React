const initialState = {
    isLoggedIn: false,
  };
  
  const authReducer = (state = initialState, action) => {
    console.log("Initial state:", state); // Vérifiez l'état initial dans la console
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };
  export default authReducer;