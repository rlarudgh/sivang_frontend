import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const setCookie = (name: string, value: string) => {
  cookies.set(name, value, { path: '/' });
};

export const removeCookie = (name: string) => {
  cookies.remove(name, { path: '/' });
};


