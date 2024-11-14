// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/', // Django backend URL
});

export const fetchStockItems = () => api.get('/stock-items');
export const addStockItem = (item) => api.post('/stock-items', item);