import axios from 'axios';
import { API_URL } from '../utils/config';

const getSummaryByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/summary/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getSummaryByUserId;
