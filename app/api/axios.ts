import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dummy-api-jtg6bessta-ey.a.run.app',
  timeout: 10000,
});

export default instance;
