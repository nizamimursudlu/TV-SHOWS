import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import {
  Grid,
  FormLabel,
  Button,
  Container,
  CssBaseline,
  Typography,
  FormGroup,
} from '@material-ui/core';
import ErrorMessage from '../components/ErrorMessage';

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [message, setMessage] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for farther instructions');
    } catch (e) {
      setError('Failed to reset password');
    }
    setLoading(false);
  }

  return (
    <div className="logs">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="secondary"
        >
          Password Reset
        </Typography>
        {error && <ErrorMessage error={error}>error={error}</ErrorMessage>}
        {message && <Alert severity="success">{message}</Alert>}
        <form onSubmit={handleSubmit}>
          <FormGroup id="email">
            <FormLabel style={{ color: 'red' }}>Email</FormLabel>
            <Form.Control type="email" ref={emailRef} required />
          </FormGroup>

          <Button disabled={loading} className="w-100" type="submit"></Button>
          <Button
            disabled={loading}
            fullWidth
            type="submit"
            variant="contained"
            color="secondary"
          >
            Reset Password
          </Button>
        </form>
        <Grid container style={{ marginTop: '10px' }}>
          <Grid item xs>
            <Link to="/login">Log In</Link>
          </Grid>
          <Grid item>
            Do not have an account yet?{' '}
            <Link style={{ color: 'red' }} to="/signup">
              Sing Up
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ForgotPassword;
