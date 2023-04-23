import axios from 'axios';
import { API_URL } from '../utils/config';

export const createProduct = async (product) => {
  try {
    const response = await axios.post(`${API_URL}/products/create`, product);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${API_URL}/products/${id}`, product);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllProductsByUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/products/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
