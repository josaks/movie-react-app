import React from 'react';

const DurationCell = ({ value }) => {
  if( value === undefined) {
    return <div></div>;
  }
  else {
    // Remove "PT" from string
    const duration = value.slice(2, value.length);

    return <div>{duration}</div>;
  }
};

export default DurationCell;
