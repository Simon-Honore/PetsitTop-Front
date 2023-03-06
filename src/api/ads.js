import { axiosInstance } from './index';
import { setAllAdsList } from '../store/reducers/ads';
import { saveUserAds } from '../store/reducers/user';

export const createAd = () => async (dispatch, getState) => {
  const state = getState();
  const {
    title,
    content,
    postal_code,
    city,
  } = state.ads;

  console.log('title >> ', title);

  const { userId } = state.user;

  const { data } = await axiosInstance.post(`/user/${userId}/ads`, {
    title,
    content,
    postal_code,
    city,
  });
};

export const fetchAllAds = () => async (dispatch) => {
  const { data } = await axiosInstance.get('/ads');

  dispatch(setAllAdsList(data));
};

export const getMyAds = () => async (dispatch, getState) => {
  const state = getState();

  const { userId } = state.user;

  const { data } = await axiosInstance.get(`/users/${userId}`);

  dispatch(saveUserAds(data.ads));
};

export const deleteOneAd = (idAd) => async (dispatch) => {
  await axiosInstance.delete(`/ads/${idAd}`);
};
