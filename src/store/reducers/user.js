import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  userId: null,
  accessToken: null,
  ads: [],
  connectedUser: [],
  publicUser: [],
};

export const changeFieldLogin = createAction('user/changeFieldLogin');
export const saveUserInfos = createAction('user/saveUserInfos');
export const logout = createAction('user/logout');
export const saveUserAds = createAction('user/saveUserAds');
export const getConnectedUserInfos = createAction('user/getConnectedUserInfos');
export const getPublicUserInfos = createAction('user/getPublicUserInfos');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFieldLogin, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(saveUserInfos, (state, action) => {
      Object.assign(state, action.payload);
    })
    .addCase(logout, (state) => {
      state.logged = false;
      state.email = '';
      state.password = '';
      state.userId = null;
      state.accessToken = null;
      state.ads = [];
    })
    .addCase(saveUserAds, (state, action) => {
      state.ads = action.payload;
    })
    .addCase(getConnectedUserInfos, (state, action) => {
      state.connectedUser = action.payload;
    })
    .addCase(getPublicUserInfos, (state, action) => {
      state.publicUser = action.payload;
    });
});

export default userReducer;
