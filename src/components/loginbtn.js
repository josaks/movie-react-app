import React, { Component } from 'react';
import { login } from '../authentication';
import Button from '@material-ui/core/Button';


const loginButton = () => {
  return(
    <Button onClick={login} variant="outlined" color="default" >
      Log in
    </Button>
  );
};

export default loginButton;
