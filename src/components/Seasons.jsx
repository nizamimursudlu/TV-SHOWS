import React from 'react';
import { Button } from '@material-ui/core';

function Seasons({ season }) {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        marginTop: '5px',
      }}
    >
      Season: {season.number}
    </Button>
  );
}

export default Seasons;
