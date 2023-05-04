import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://petsittop-api.up.railway.app/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});
