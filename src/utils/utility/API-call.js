import axios from 'axios';
import { getAccessToken } from '../session';

export const API = () => {
  return axios.create({
    baseURL: '',
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getAccessToken(),
    },
  });
}