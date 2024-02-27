export const login = () => ({
    type: 'LOGIN',
  });

export const logout = () => ({
    type: 'LOGOUT',
  });

export const setConnected = () => {
    return {
      type: 'SET_CONNECTED',
    };
};