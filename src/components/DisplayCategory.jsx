import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardMedia, Paper, CardActions, Card } from '@material-ui/core';
import noImage from '../noImage.png';

import { v4 as uuid_v4 } from 'uuid';

const DisplayCategory = ({ show }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="zoom-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Paper elevation={10} style={{ margin: '5px' }}>
        <Card>
          <div className="show-list">
            <CardMedia
              style={{ maxHeight: '250px', position: 'relative' }}
              image={show.image !== null ? show.image.medium : noImage}
              component="img"
            />
            {isHovered && (
              <CardActions
                style={{
                  float: 'right',
                  position: 'absolute',
                  backgroundColor: 'white',
                }}
              >
                <Link
                  style={{ width: '147px' }}
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

export default DisplayCategory;
