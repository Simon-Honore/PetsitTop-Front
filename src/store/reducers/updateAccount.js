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
// export const setPresentation = createAction('updateAccount/setPresentation');
// export const addPetType = createAction('updateAccount/addPetType');
// export const removePetType = createAction('updateAccount/removePetType');
// export const resetFieldsCreatAccount = createAction('updateAccount/resetFieldsCreatAccount');

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
      console.log(action.payload.key, action.payload.value);
    });
  // .addCase(addPetType, (state, action) => {
  //   state.pet_type = [...state.pet_type, action.payload];
  // })
  // .addCase(removePetType, (state, action) => {
  //   state.pet_type = state.pet_type.filter((nb) => nb !== action.payload);
  // })
  // .addCase(resetFieldsCreatAccount, (state) => {
  //   state.first_name = '';
  //   state.last_name = '';
  //   state.email = '';
  //   state.password = '';
  //   state.confirmPassword = '';
  //   state.postal_code = '';
  //   state.city = '';
  //   state.availability = false;
  //   state.availability_details = '';
  //   state.role_petsitter = false;
  //   state.role_petowner = false;
  //   state.pet_type = [];
  //   state.cgu_consent = false;
  //   state.rgpd_consent = false;
  // });
});
export default updateAccountReducer;
