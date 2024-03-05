import { createAction } from '@reduxjs/toolkit';

export const updateUserData = createAction('UPDATE_USERDATA');
export const editUsername = createAction('EDIT_USERNAME');
export const logout = createAction('LOGOUT');