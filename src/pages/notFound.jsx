import React from 'react';
import NavbarNoSearch from '../components/NavbarNoSearch';
import { Typography } from '@material-ui/core';

const notFound = () => {
  return (
    <div>
      <NavbarNoSearch />
      <Typography
        color="primary"
        component="h1"
        variant="h3"
        align="center"
        margin="normal"
      >
        Not Found
      </Typography>
    </div>
  );
};

export default notFound;
