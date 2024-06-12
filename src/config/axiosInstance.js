import axios from "axios";
import { store } from "../store/store";

export const axiosInstance = axios.create({
    baseURL: 'http://3.67.195.110/'
});

axiosInstance.interceptors.request.use(function (config) {
    const updatedConfig = { ...config };
    const { token } = store.getState().auth;

    if (token) {
        updatedConfig.headers.Authorization = `Bearer ${token}`;
    }

    return updatedConfig;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
