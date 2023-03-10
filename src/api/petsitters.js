import { saveResearch } from '../store/reducers/petsitters';
import { axiosInstance } from './index';

export const searchPetsitters = () => async (dispatch, getState) => {
  const state = getState();

  const { departement, petType } = state.petsitters;

  const { data } = await axiosInstance.get(`/users?department=${departement}&pet_type=${petType}`);

  // for saved response in state
  dispatch(saveResearch(data));
};
