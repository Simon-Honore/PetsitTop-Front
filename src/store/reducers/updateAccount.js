import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  postal_code: '',
  city: '',
  presentation: '',
  availability: false,
  availability_details: '',
  role_petsitter: false,
  role_petowner: true,
  pet_types: [],
};

// TODO - add CGU and RGPD

export const copyConnectedUserInfos = createAction('updateAccount/saveAccountInfos');
export const setPetsitterRole = createAction('updateAccount/setPetsitterRole');
export const setPetownerRole = createAction('updateAccount/setPetownerRole');
export const changeFieldUpdateAccount = createAction('updateAccount/changeFieldUpdateAccount');
export const addPetTypeToUpdate = createAction('updateAccount/addPetTypeToUpdate');
export const removePetTypeToUpdate = createAction('updateAccount/removePetTypeToUpdate');
export const resetFieldsUpdateAccount = createAction('updateAccount/resetFieldsCreatAccount');

const updateAccountReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(copyConnectedUserInfos, (state, action) => {
      Object.assign(state, action.payload);
    })
    .addCase(setPetsitterRole, (state, action) => {
      state.role_petsitter = action.payload;
    })
    .addCase(setPetownerRole, (state, action) => {
      state.role_petowner = action.payload;
    })
    .addCase(changeFieldUpdateAccount, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(addPetTypeToUpdate, (state, action) => {
      state.pet_types = [...state.pet_types, action.payload];
    })
    .addCase(removePetTypeToUpdate, (state, action) => {
      state.pet_types = state.pet_types.filter((nb) => nb !== action.payload);
    })
    .addCase(resetFieldsUpdateAccount, (state) => {
      state.first_name = '';
      state.last_name = '';
      state.email = '';
      state.postal_code = '';
      state.city = '';
      state.presentation = '';
      state.availability = false;
      state.availability_details = '';
      state.role_petsitter = false;
      state.role_petowner = true;
      state.pet_types = [];
    });
});
export default updateAccountReducer;
