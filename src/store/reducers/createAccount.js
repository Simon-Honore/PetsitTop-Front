import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  postal_code: '',
  city: '',
  availability: false,
  availability_details: '',
  role_petsitter: false,
  role_petowner: false,
  pet_type: [],
};

// TODO - add CGU and RGPD

export const changeFieldCreateAccount = createAction('user/changeFieldCreateAccount');
export const saveAccountInfos = createAction('user/saveAccountInfos');
export const addPetType = createAction('user/addPetType');
export const removePetType = createAction('user/removePetType');

const createAccountReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFieldCreateAccount, (state, action) => {
      state[action.payload.key] = action.payload.value;
      console.log(action.payload.key, state[action.payload.key]);
    })
    .addCase(saveAccountInfos, (state, action) => {
      Object.assign(state, action.payload);
    })
    .addCase(addPetType, (state, action) => {
      state.pet_type = [...state.pet_type, action.payload];
      console.log('state.pet_type >> ', state.pet_type);
    })
    .addCase(removePetType, (state, action) => {
      state.pet_type = state.pet_type.filter((nb) => nb !== action.payload);
      console.log('state.pet_type >> ', state.pet_type);
    });
});
export default createAccountReducer;
