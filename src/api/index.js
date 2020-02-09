import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3000/api',
});

export const getAllItems = payload => api.get(`/items`, payload);
export const getItemById = id => api.get(`/item/${id}`);
export const insertItem = payload => api.post(`/item`, payload);
export const updateItemById = (id, payload) => api.put(`/item/${id}`, payload);
export const deleteItemById = id => api.delete(`/item/${id}`);

const apis = {
  getAllItems,
  getItemById,
  insertItem,
  updateItemById,
  deleteItemById,
};

export default apis;