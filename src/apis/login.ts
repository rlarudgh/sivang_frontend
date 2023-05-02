import axios from 'axios';
import { LoginType } from '@/types/login';

export const Login = async (data: LoginType) => {
  const response = await axios.post('http://localhost:3001/auth/login', data);
  return response;
};
