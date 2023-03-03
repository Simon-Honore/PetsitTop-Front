import { saveUserInfos } from '../store/reducers/user';
import { axiosInstance } from './index';

export const login = () => async (dispatch, getState) => {
  const state = getState();
  const { email, password } = state.user;

  const { data } = await axiosInstance.post('/login', {
    email,
    password,
  });

  localStorage.setItem('isLogged', data.logged);
  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('userId', data.userId);

  dispatch(saveUserInfos(data));
};
