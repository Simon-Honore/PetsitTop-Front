import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  allAdsList: [],
  title: '',
  content: '',
  postal_code: '',
  city: '',
};

export const changeFieldAd = createAction('ads/changeFieldAd');
export const saveAdInfos = createAction('ads/saveAdInfos');
export const setAllAdsList = createAction('ads/setAllAdsList');
export const resetFieldsAd = createAction('ads/resetFieldsAd');

const adReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFieldAd, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(saveAdInfos, (state, action) => {
      Object.assign(state, action.payload);
    })
    .addCase(setAllAdsList, (state, action) => {
      state.allAdsList = action.payload;
    })
    .addCase(resetFieldsAd, (state) => {
      state.title = '';
      state.content = '';
      state.postal_code = '';
      state.city = '';
    });
});

export default adReducer;
