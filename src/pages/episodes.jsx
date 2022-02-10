import React, { useState, useEffect } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import ErrorMessage from '../components/ErrorMessage';
import Episode from '../components/Episode';
import Navbar from '../components/Navbar';
import { Typography, CircularProgress, Box } from '@material-ui/core';

const Episodes = ({ match }) => {
  const [episodes, setEpisodes] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchData(id) {
    setLoading(true);
    try {
      const res = await fetch(`http://api.tvmaze.com/seasons/${id}/episodes`);
      if (!res.ok) {
        setError(true);

        throw Error;
      }
      setLoading(false);
      const json = await res.json();
      setEpisodes(json);
    } catch (e) {
      setError('Something went wrong, please try again later');
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(match.params.id);
  }, [match.params.id]);

  return (
    <div>
      <Navbar />
      {error && <ErrorMessage error={error}></ErrorMessage>}
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Box margin={3}>
            <Typography
              color="primary"
              component="h1"
              variant="h2"
              align="center"
              className="genre"
            >
              Season: {episodes && episodes[0].season}
            </Typography>
          </Box>

          <div className="episodes">
            {episodes &&
              episodes.map((episode) => (
                <Episode episode={episode} key={uuid_v4()} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Episodes;
