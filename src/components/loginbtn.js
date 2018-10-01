import React from 'react';
import Button from '@material-ui/core/Button';


/*
  A button used to log into the application
*/
const loginButton = ({ login }) => {
  return(
    <Button onClick={login} variant="outlined" color="default" >
      Log in
    </Button>
  );
};

export default loginButton;
