import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://petsitterfriendly-production.up.railway.app/',
});