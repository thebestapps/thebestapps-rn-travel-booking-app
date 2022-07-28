import axios from "axios";

const API = axios.create({
  baseURL: 'https://alpha.api.getout.travel/apps/auth/',
});

// API.interceptors.request.use((req) => {
//     if (sessionStorage.getItem("user")) {
//       req.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem("user")).token}`;
//     }
//     return req;
// });

export const login = (form) => API.post('v2/auth/login', form);
export const refreshToken = (form) => API.post('v2/auth/get-access-token', form);


