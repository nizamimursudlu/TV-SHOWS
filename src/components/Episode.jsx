import React from 'react';
import { v4 as uuid_v4 } from 'uuid';
import noImage from '../noImage.png';
import {
  Paper,
  Card,
  Typography,
  CardMedia,
  CardContent,
} from '@material-ui/core';

const Episode = ({ episode }) => {
  return (
    <div>
      <div style={{ maxWidth: '250px' }}>
        <Paper elevation={6} style={{ marginTop: '10px' }}>
          <Card>
            <a href={episode.url} target="_blanc" key={uuid_v4()}>
              <div className="episode">
                <CardMedia
                  image={
                    episode.image !== null ? episode.image.medium : noImage
                  }
                  component="img"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="primary"
                  >
                    Episode: {episode.number}
                  </Typography>
                  <Typography variant="body2" component="p" color="primary">
                    {episode.name}
                  </Typography>
                </CardContent>
              </div>
            </a>
          </Card>
        </Paper>
      </div>
    </div>
  );
};

export default Episode;
