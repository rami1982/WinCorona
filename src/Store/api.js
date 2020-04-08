import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': '123456',
    'X-Parse-REST-API-Key': '123456',
  },
});
export default api;