import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ListContextProvider from './contexts/ListContextProvider';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivetRoute';
import login from './pages/login';
import signup from './pages/signup';
import forgotPassword from './pages/forgotPassword';
import notFound from './pages/notFound';
import home from './pages/home';
import show from './pages/show';
import episodes from './pages/episodes';

function App() {
  return (
    <div
      style={{
        padding: '15px',
      }}
    >
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{
          minHight: '100vh',
        }}
      >
        {' '}
        <Router>
          <AuthProvider>
            <Switch>
              <ListContextProvider>
                <Route path="/signup" component={signup} />
                <Route path="/login" component={login} />
                <Route path="/forgot-password" component={forgotPassword} />
                <PrivateRoute exact path="/" component={home} />
                <Route exact path="/notfound" component={notFound} />
                <Route exact path="/:name/:id" component={show} />
                <Route exact path="/:name/:id/episodes" component={episodes} />
              </ListContextProvider>
            </Switch>
          </AuthProvider>
        </Router>
      </Container>
    </div>
  );
}

export default App;
