import { axiosInstance } from '.';

export const createAd = () => async (dispatch, getState) => {
  const state = getState();
  const {
    title,
    content,
    postal_code,
    city,
  } = state.ad;

  console.log(
    title,
    content,
    postal_code,
    city,
  );

  const { userId } = state.user;

  console.log(`/user/${userId}/ads`);

  const { data } = await axiosInstance.post(`/user/${userId}/ads`, {
    title,
    content,
    postal_code,
    city,
  });

  console.log(data);
};
