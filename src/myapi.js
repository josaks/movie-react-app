import { getToken, login, getDecodedToken } from './authentication';
import axios from 'axios';

/*
Environment variable REACT_APP_BASEURL should be
http://themovieapi.azurewebsites.net/api
in production.
*/

// Put the JWT in the header of our request so we automatically send it with every request
const token = getToken();
const headers = { 'Authorization': 'Bearer ' + token };
let myAPIAxios = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 1000,
  headers: headers,
});

/*
  Intercept status codes returned when we make our API calls,
  and do some action depending on what status code we get.

  401 Unauthorized prompts the user to log in.
  404 Not Found displays an alert.
  400 Bad Request displays an alert.
*/
myAPIAxios.interceptors.response.use(res => {
  return res;
}, error => {
  const { status } = error.response;
  if(status === 401){
    login();
  }
  else if(status === 403){
    const role = getDecodedToken().role;
    alert(`Your account has the role(s) - ${role} - and is not authorized to do that.`);
  }
  else if(status === 404){
    alert("404 Not Found");
  }
  else if(status === 400){
    alert("400: Bad request. The data sent probably did not pass the server validation.");
  }
});

export { myAPIAxios };
