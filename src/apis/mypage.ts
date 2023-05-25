import instance from './axios';
import { MyPageListType } from '@/types/mypage';

export const getProfile = async () => {
  const response = await instance.get<MyPageListType>('/mypage/getProfile');
  return response;
};
