import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardMedia, Button, Paper, Card, CardActions } from '@material-ui/core';
import noImage from '../noImage.png';
import { v4 as uuid_v4 } from 'uuid';

const MyList = ({ show, handleDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="zoom-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Paper elevation={10} style={{ margin: '5px' }}>
        <Card>
          <CardMedia
            style={{ maxHeight: '270px', position: 'relative' }}
            image={show.image !== null ? show.image.medium : noImage}
            component="img"
          />
          <div className="show-list" style={{ maxHeight: '250px' }}>
            {isHovered && (
              <CardActions
                style={{
                  float: 'right',
                  position: 'absolute',
                  backgroundColor: 'white',
                }}
              >
                {' '}
                <Button
                  size="small"
                  variant="contained"
                  type="submit"
                  color="primary"
                  style={{ color: 'white' }}
                  value={show}
                  onClick={() => {
                    handleDelete(show.id);
                  }}
                >
                  DELETE
                </Button>
                <Link
                  to={`/${show.name}/${show.id}`}
                  key={uuid_v4()}
                  className="link"
                >
                  READ MORE
                </Link>
              </CardActions>
            )}
          </div>
        </Card>
      </Paper>
    </div>
  );
};

export default MyList;
