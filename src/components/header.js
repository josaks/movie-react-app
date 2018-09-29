import React, { Component } from 'react';
import LogInButton from './loginbtn';
import { loggedIn } from '../authentication';
import LogoutButton from './logoutbutton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


class Header extends Component {

  render() {
    const isLoggedIn = loggedIn();

    return(
      <div className="App-header" >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" aria-label="Menu">
              <a href="/">Movies</a>
            </Typography>
            <div className="loginout">
              {!isLoggedIn && <LogInButton />}
              {isLoggedIn && <LogoutButton />}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;






// export default () => (
//   <header className="App-header">
//     <a className="limitWidth" href="/">
//       <h1 className="App-title">Movie react app</h1>
//     </a>
//     <div className="logInOutButtons">
//       { loggedIn() && <LogoutButton /> }
//       { !loggedIn() && <LogInBtn /> }
//     </div>
//   </header>
// );
