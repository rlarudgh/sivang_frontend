import instance from './axios';

export const getProfile = async () => {
  const response = await instance.get('/mypage/getProfile');
  return response;
};
