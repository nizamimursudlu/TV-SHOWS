import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const LogOut = () => {
  const [error, setError] = useState('');
  const { logOut } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError('');
    try {
      await logOut();
      history.push('/login');
    } catch (e) {
      console.log(e);
      setError('Failed to log out');
    }
  }
  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}

      <Button
        variant="contained"
        type="submit"
        onClick={handleLogOut}
        color="primary"
        style={{ color: 'white' }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOut;
