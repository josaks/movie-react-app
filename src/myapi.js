import { getToken, login } from './authentication';
import axios from 'axios';

/*
Environment variable REACT_APP_BASEURL should be
http://themovieapi.azurewebsites.net/api
in production.
*/

const token = getToken();
const headers = { 'Authorization': 'Bearer ' + token };

let myAPIAxios = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 1000,
  headers: headers,
});

myAPIAxios.interceptors.response.use(res => {
  return res;
}, error => {
  const { status } = error.response;
  if(status === 401){
    login();
  }
  else if(status === 404){
    window.location.href = "/";
  }
  else if(status === 400){
    alert("400: Bad request. The data sent probably did not pass the server validation.");
  }
});

export { myAPIAxios };
