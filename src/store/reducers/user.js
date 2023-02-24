import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  logged: false,
  email: '',
  password: '',
};

export const changeFieldLogin = createAction('user/changeFieldLogin');
export const saveUserInfos = createAction('user/saveUserInfos');
export const logout = createAction('user/logout');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFieldLogin, (state, action) => {
      state[action.payload.key] = action.payload.value;
      console.log('email >', state.email, 'password >', state.password);
    })
    .addCase(saveUserInfos, (state, action) => {
      Object.assign(state, action.payload);
      state.logged = true;
    })
    .addCase(logout, (state) => {
      state.logged = false;
      state.email = '';
      state.password = '';
    });
});

export default userReducer;
