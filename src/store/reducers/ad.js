import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  title: '',
  content: '',
  postal_code: '',
  city: '',
  userId: null,
};

export const changeFieldAd = createAction('user/changeFieldAd');
export const saveAdInfos = createAction('user/saveAdInfos');

const adReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFieldAd, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(saveAdInfos, (state, action) => {
      Object.assign(state, action.payload);
    });
});

export default adReducer;
