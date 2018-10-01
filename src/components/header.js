import React, { Component } from 'react';
import LogInButton from './loginbtn';
import { loggedIn, login, logout } from '../authentication';
import LogoutButton from './logoutbutton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


/*
  Represents the header for the application
*/
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
              {!isLoggedIn && <LogInButton login={login}/>}
              {isLoggedIn && <LogoutButton logout={logout}/>}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
