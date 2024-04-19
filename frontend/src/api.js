import {ACCESS_TOKEN} from "./constants.js";
import axios from "axios";
const api = axios.create(
    {
        baseURL:import.meta.env.VITE_API_URL ,
    }
);

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error)
    }
)

export default api;