import { getToken } from './authentication';
import axios from 'axios';

//azure api address
//http://themovieapi.azurewebsites.net/api


const token = getToken();
const headers = { 'Authorization': 'Bearer ' + token };

const myAPIAxios = axios.create({
  baseURL: 'https://localhost:44364/api/',
  timeout: 1000,
  headers: headers,
});

export { myAPIAxios };
