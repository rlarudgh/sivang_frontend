import instance from './axios';

export const getPostList = async () => {
  const response = await instance.get('/money/get');
  return response;
};
