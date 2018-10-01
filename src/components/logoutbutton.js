import React from 'react';
import Button from '@material-ui/core/Button';


/*
  A button used to log out of the application
*/
const logoutButton = ({ logout }) => {
  return(
    <Button onClick={logout} variant="outlined" color="default">
      Log out
    </Button>
  );
};

export default logoutButton;
