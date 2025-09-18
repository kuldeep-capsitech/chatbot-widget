import axios from "axios";

export const api = axios.create({
    baseURL: "https://localhost:5001/api"
})

api.interceptors.request.use(config => {
    if (import.meta.env.VITE_TOKEN) {
        // config.headers['Authorization'] = `Bearer ${import.meta.env.VITE_TOKEN}`
        config.withCredentials = true
    }
    return config
}, error => Promise.reject(error));

api.interceptors.response.use(response => response, error => Promise.reject(error));

