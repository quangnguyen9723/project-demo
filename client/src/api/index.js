import axios from 'axios';

// const BASE_URL = 'http://localhost:8000/api';
const BASE_URL = "/api";
const API = axios.create({ baseURL: BASE_URL });

export const fetchUsers = () => API.get('/users');

export const fetchItems = () => API.get('/items');
export const getItem = (id) => API.get(`/items/${id}`);
export const updateItem = (id, updateData) => API.patch(`/items/${id}`, updateData);