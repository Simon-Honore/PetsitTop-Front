import { axiosInstance } from './index';
import { setAllAdsList } from '../store/reducers/ads';

export const createAd = () => async (dispatch, getState) => {
  const state = getState();
  const {
    title,
    content,
    postal_code,
    city,
  } = state.ad;

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
