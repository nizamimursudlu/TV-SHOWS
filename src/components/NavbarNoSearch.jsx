import React from 'react';
import LogOut from './LogOut';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import tvShow from '../tv-show-small.jpeg';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const Navbar = ({ fetchData }) => {
  const value = useAuth();

  return (
    <div>
      {value.currentUser && (
        <div>
          <AppBar position="static">
            <Toolbar>
              <div>
                <Card
                  style={{
                    width: '60px',
                    padding: '5px',
                    margin: '0px 15px 0px 15px',
                  }}
                >
                  <CardMedia image={tvShow} component="img" />
                </Card>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                  }}
                >
                  <Link to="/" className="link" style={{ color: 'white' }}>
                    <HomeRoundedIcon
                      style={{
                        fontSize: '70px',
                      }}
                    />
                  </Link>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <LogOut />
                </div>
              </div>
              <div />
            </Toolbar>
          </AppBar>
        </div>
      )}
    </div>
  );
};

export default Navbar;
