import React from 'react';
import { Typography, Box } from '@material-ui/core';

const NotFound = () => {
  return (
    <div>
      <Box margin={10}>
        <Typography color="primary" component="h1" variant="h3" align="center">
          Not Found
        </Typography>
      </Box>
    </div>
  );
};

export default NotFound;
