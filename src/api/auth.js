import { saveUserInfos } from '../store/reducers/user';
import { axiosInstance } from './index';

export const login = () => async (dispatch, getState) => {
  const state = getState();
  const { email, password } = state.user;

  const { data } = await axiosInstance.post('/login', {
    email,
    password,
  });

  axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;

  dispatch(saveUserInfos(data));
};
