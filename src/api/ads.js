import { axiosInstance } from './index';
import { resetFieldsAd, setAllAdsList } from '../store/reducers/ads';
import { saveUserAds } from '../store/reducers/user';

export const createAd = () => async (dispatch, getState) => {
  const state = getState();
  const {
    title,
    content,
    postal_code,
    city,
  } = state.ads;

  const { userId } = state.user;

  const { data } = await axiosInstance.post(`/user/${userId}/ads`, {
    title,
    content,
    postal_code,
    city,
  });

  dispatch(resetFieldsAd());
};

export const fetchAllAds = () => async (dispatch) => {
  const { data } = await axiosInstance.get('/ads');
  console.log('data >> ', data.results);

  dispatch(setAllAdsList(data.results));
};

export const getMyAds = () => async (dispatch, getState) => {
  const state = getState();

  const { userId } = state.user;

  const { data } = await axiosInstance.get(`/user/${userId}/ads`);

  dispatch(saveUserAds(data));
};

export const deleteOneAd = (idAd) => async (dispatch) => {
  await axiosInstance.delete(`/ads/${idAd}`);
};

export const updateAd = (idAd) => async (dispatch, getState) => {
  const state = getState();

  const {
    title,
    content,
    postal_code,
    city,
  } = state.ads;

  const { data } = await axiosInstance.put(`/ads/${idAd}`, {
    title,
    content,
    postal_code,
    city,
  });

  dispatch(resetFieldsAd());
};
