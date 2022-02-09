import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import {
  Button,
  Grid,
  Container,
  CssBaseline,
  Typography,
  FormGroup,
  TextField,
  Card,
  CardMedia,
} from '@material-ui/core';
import tvShow from '../tv-show.jpeg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e91e63',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ef6694',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ef6694',
    },
    borderBottom: '2px #e91e63 solid',
  },
});

const LogIn = () => {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (e) {
      setError('Failed to sign in');
    }
    setLoading(false);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: '100px',
      }}
    >
      <CssBaseline />
      <Grid item xs={4}>
        <Card>
          <CardMedia image={tvShow} component="img" />
        </Card>
        <Typography
          component="h4"
          variant="h6"
          align="center"
          style={{ color: 'white' }}
        >
          Unlimited films, TV programmes and more. Watch anywhere. Cancel at any
          time. Ready to watch? Create your account.
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Container>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="primary"
          >
            Log In
          </Typography>
          {error && <ErrorMessage error={error}>{error}</ErrorMessage>}
          <form onSubmit={handleSubmit}>
            <FormGroup id="email">
              <TextField
                className={classes.root}
                type="email"
                inputRef={emailRef}
                required
                variant="standard"
                label="Email"
                margin="normal"
                inputProps={{
                  style: { color: 'white', paddingLeft: '10px' },
                }}
                InputLabelProps={{
                  style: { color: '#e91e63' },
                }}
              />
            </FormGroup>
            <FormGroup id="password">
              <TextField
                className={classes.root}
                color="primary"
                type="password"
                inputRef={passwordRef}
                required
                variant="standard"
                label="Password Confirmation"
                margin="normal"
                inputProps={{ style: { color: 'white', paddingLeft: '10px' } }}
                InputLabelProps={{
                  style: { color: '#e91e63' },
                }}
              />
            </FormGroup>
            <Button
              disabled={loading}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Log In
            </Button>
          </form>
          <Grid container style={{ marginTop: '10px' }}>
            <Grid item xs>
              <Link className="link" to="/forgot-password">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              Do not have an account yet?{' '}
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default LogIn;
