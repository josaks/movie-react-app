import { runWithAdal } from 'react-adal';
import { authContext } from './authentication';

const DO_NOT_LOGIN = false;

runWithAdal(authContext, () => {
  require('./indexApp.js');
}, DO_NOT_LOGIN);
