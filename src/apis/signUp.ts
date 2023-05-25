import axios from 'axios';
import { SignUpType } from '@/types/signUp';

export const SignUp = async (data: SignUpType) => {
  const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}auth/signUp`, data);
  return response;
};
