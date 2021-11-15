import axios from 'axios';

const api = axios.create({
    baseURL : "https://localhost:44319",
});

export default api;