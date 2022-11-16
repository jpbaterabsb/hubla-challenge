import axios from 'axios';


axios.defaults.baseURL =  process.env.REACT_APP_BASE_URL;
// axios.defaults.withCredentials = false;

export const rest = axios;