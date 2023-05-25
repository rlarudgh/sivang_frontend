import axios from 'axios';
import { LoginType } from '@/types/login';

export const Login = async (data: LoginType) => {
  const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}auth/login`, data);
  return response;
};
