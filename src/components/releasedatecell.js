import React from 'react';

const ReleaseDateCell = ({ value }) => {
  if( value === undefined) {
    return <div></div>;
  }
  else {
    // Remove time from string
    const date = value.slice(0, 10);

    return <div>{date}</div>;
  }
};

export default ReleaseDateCell;
