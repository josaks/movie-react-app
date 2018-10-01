import { AuthenticationContext, withAdalLogin } from 'react-adal';
import jwt_decode from 'jwt-decode';

// Config for connecting to Azure AD
// Values are set using Environment Variables
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

// Get AuthenticationContext
export const authContext = new AuthenticationContext(adalConfig);

// Get the JWT created by Azure AD
export const getToken = () => {
 return authContext.getCachedToken(authContext.config.clientId);
};

// Decode the JWT from base64 and return it so we can read its claims
export const getDecodedToken = () => jwt_decode(getToken());

//
export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);

// Returns true if the AuthenticationContext claims the user is logged in, false if not
export const loggedIn = () => !(authContext._user === null);

// Redirects the user to Azure ADs log out page
export const logout = () => authContext.logOut();

// Redirects the user to Azure ADs log in page
export const login = () => authContext.login();
