import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { logout } from '../authentication';


const logoutButton = () => {
  return(
    <Button onClick={logout} variant="outlined" color="default">
      Log out
    </Button>
  );
};

export default logoutButton;
