import axios from 'axios';
import { API_URL } from '../utils/config';

export const createOrder = async (userId, products) => {
  try {
    const response = await axios.post(`${API_URL}/orders/${userId}`, products);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    await axios.delete(`${API_URL}/orders/${orderId}`);
  } catch (error) {
    console.error(error);
  }
};

export const getOrdersByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/orders/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
