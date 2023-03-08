import { axiosInstance } from '.';
import { getConnectedUserInfos, getPublicUserInfos } from '../store/reducers/user';

export const fetchConnectedUserInfos = () => async (dispatch) => {
  const userId = localStorage.getItem('userId');

  const { data } = await axiosInstance.get(`/users/${userId}`);

  dispatch(getConnectedUserInfos(data));
};

export const fetchPublicUserInfos = (publicUserId) => async (dispatch) => {
  const { data } = await axiosInstance.get(`/users/${publicUserId}`);

  dispatch(getPublicUserInfos(data));
};
