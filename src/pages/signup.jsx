import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import tvShow from '../tv-show.jpeg';
import {
  Card,
  TextField,
  CardMedia,
  Grid,
  Button,
  Container,
  CssBaseline,
  Typography,
  FormGroup,
} from '@material-ui/core';
import ErrorMessage from '../components/ErrorMessage';

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

const SignUp = () => {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (e) {
      setError('Failed to create an account');
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
        <div>
          <Card>
            <CardMedia image={tvShow} component="img" />
          </Card>
          <Typography
            component="h4"
            variant="h6"
            align="center"
            style={{ color: 'white' }}
          >
            Unlimited films, TV programmes and more. Watch anywhere. Cancel at
            any time. Ready to watch? Create your account.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={4}>
        {' '}
        <div>
          <Container>
            <div>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="primary"
              >
                Sign Up
              </Typography>

              {error && (
                <ErrorMessage error={error}>error={error}</ErrorMessage>
              )}
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
                    label="Password"
                    margin="normal"
                    variant="standard"
                    inputProps={{
                      style: { color: 'white', paddingLeft: '10px' },
                    }}
                    InputLabelProps={{
                      style: { color: '#e91e63', borderColor: 'red' },
                    }}
                  />
                </FormGroup>
                <FormGroup id="password-confirm">
                  <TextField
                    className={classes.root}
                    color="primary"
                    type="password"
                    inputRef={passwordConfirmRef}
                    required
                    variant="standard"
                    label="Password Confirmation"
                    margin="normal"
                    inputProps={{
                      style: { color: 'white', paddingLeft: '10px' },
                    }}
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
                  Sing In
                </Button>
              </form>

              <div
                style={{
                  textAlign: 'center',
                  marginTop: '10px',
                  color: 'white',
                }}
              >
                Already have an account?{' '}
                <Link to="/login" className="link">
                  Log In
                </Link>
              </div>
            </div>{' '}
          </Container>
        </div>
      </Grid>
    </div>
  );
};

export default SignUp;
