import { configureStore } from '@reduxjs/toolkit';
import adReducer from './reducers/ads';
import createAccountReducer from './reducers/createAccount';
import petsittersReducer from './reducers/petsitters';
import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    user: userReducer,
    petsitters: petsittersReducer,
    createAccount: createAccountReducer,
    ads: adReducer,
  },
});

export default store;
