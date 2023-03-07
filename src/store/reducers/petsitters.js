import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  departement: '',
  petType: '',
  results: [],
};

export const changeFieldDepartement = createAction('petsitters/changeFieldDepartement');
export const changeFieldPetType = createAction('petsitters/changeFieldPetType');
export const saveResearch = createAction('petsitters/saveResearch');
export const resetResearchPetsitters = createAction('petsitters/resetResearchPetsitters');

const petsittersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFieldDepartement, (state, action) => {
      state.departement = action.payload;
    })
    .addCase(changeFieldPetType, (state, action) => {
      state.petType = action.payload;
    })
    .addCase(saveResearch, (state, action) => {
      state.results = action.payload;
    })
    .addCase(resetResearchPetsitters, (state) => {
      state.departement = '';
      state.petType = '';
      state.results = [];
    });
});

export default petsittersReducer;
