import { createAction } from '@reduxjs/toolkit';

export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');
export const logfail = createAction('LOGFAIL');