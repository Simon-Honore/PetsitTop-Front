import { configureStore } from '@reduxjs/toolkit';
import petsittersReducer from './reducers/petsitters';
import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    user: userReducer,
    petsitters: petsittersReducer,
  },
});

export default store;
