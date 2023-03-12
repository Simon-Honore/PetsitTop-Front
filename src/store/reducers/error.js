import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  error: '',
};

export const setErrorMessage = createAction('ERROR/SET_ERROR_MESSAGE');

const errorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setErrorMessage, (state, action) => {
      state.error = action.payload;
    });
});

export default errorReducer;
