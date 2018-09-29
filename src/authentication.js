import { AuthenticationContext, withAdalLogin } from 'react-adal';
import jwt_decode from 'jwt-decode';

const adalConfig = {
 tenant: process.env.REACT_APP_TENANT,
 clientId: process.env.REACT_APP_CLIENTID,
 endpoints: {
   api: process.env.REACT_APP_ENDPOINT
 },
 postLogoutRedirectUri: window.location.origin,
 redirectUri: process.env.REACT_APP_REDIRECTURI,
 cacheLocation: 'sessionStorage'
};

export const authContext = new AuthenticationContext(adalConfig);
export const getToken = () => {
 return authContext.getCachedToken(authContext.config.clientId);
};
export const getDecodedToken = () => jwt_decode(getToken());
export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
export const loggedIn = () => !(authContext._user === null);
export const logout = () => authContext.logOut();
export const login = () => authContext.login();
