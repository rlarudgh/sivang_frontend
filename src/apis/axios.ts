import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.REACT_APP_BASE_URL}`,
  timeout: 2000,
});

export default instance;
