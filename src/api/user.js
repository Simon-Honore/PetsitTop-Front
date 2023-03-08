import { axiosInstance } from '.';
import { getConnectedUserInfos } from '../store/reducers/user';

export const fetchConnectedUserInfos = () => async (dispatch, getState) => {
  const userId = localStorage.getItem('userId');

  const { data } = await axiosInstance.get(`/users/${userId}`);

  dispatch(getConnectedUserInfos(data));
};
