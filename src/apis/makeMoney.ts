import { MakeMoneyType } from '@/types/create';
import instance from './axios';

export const makeMoney = async (info: MakeMoneyType) => {
  const response = await instance.post('/money/post', info);
  return response;
};
