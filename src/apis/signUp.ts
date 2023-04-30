import axios from 'axios';
import { SignUpType } from '@/types/signUp';

export const SignUp = async (data: SignUpType) => {
  const response = await axios.post(`http://localhost:3001/auth/register`, data);
  return response;
};
