import axios from 'axios';
import { API_URL } from '../utils/config';

const login = (email, password) =>
  axios
    .post(`${API_URL}/login`, {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(`Login error ${e}`);
    });

export default {
  login,
};
