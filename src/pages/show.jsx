import React, { useEffect, useState } from 'react';
import noImage from '../noImage.png';
import { v4 as uuid_v4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useListContext } from '../contexts/ListContextProvider';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import { Paper, Card, CircularProgress, Typography } from '@material-ui/core';
import ErrorMessage from '../components/ErrorMessage';
import Seasons from '../components/Seasons';
import Navbar from '../components/Navbar';

const Show = ({ match }) => {
  const [show, setData] = useState();
  const [seasons, setSeasons] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { myList, setMyList, showSearch, setShowSearch } = useListContext();
  setShowSearch(false);

  const getFilmData = async (url, setFunction) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(true);

        throw Error;
      }
      setLoading(false);
      const data = await response.json();
      setFunction(data);
    } catch (e) {
      setError('Something went wrong, please try again later');
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilmData(`https://api.tvmaze.com/shows/${match.params.id}`, setData);
    getFilmData(
      `https://api.tvmaze.com/shows/${match.params.id}/seasons`,
      setSeasons,
    );
  }, [match.params.id]);

  function AddBtn({ show, myList }) {
    let addShow = myList.find((item) => item.id === show.id);

    return (
      <div>
        {(!addShow && (
          <AddIcon
            onClick={() => {
              setMyList((prev) => [...prev, show]);
            }}
            style={{
              fontSize: '40px',
              color: 'rgb(25, 94, 139)',
              float: 'right',
              marginRight: '20px',
              marginTop: '-65px',
              cursor: 'pointer',
            }}
          />
        )) || (
          <CheckIcon
            style={{
              fontSize: '40px',
              color: 'green',
              float: 'right',
              marginRight: '20px',
              marginTop: '-65px',
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div>
      <Navbar showSearch={showSearch} />
      {error && <ErrorMessage error={error}></ErrorMessage>}
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Paper elevation={3} className="movie">
            <Card style={{ padding: '15px' }}>
              {show && (
                <Typography
                  gutterBottom
                  variant="h3"
                  style={{ textAlign: 'center' }}
                >
                  {show.name}
                </Typography>
              )}
              {show && <AddBtn show={show} myList={myList} />}
              <div style={{ display: 'flex' }}>
                <div className="img-rating">
                  {show && show.image !== null ? (
                    <img alt="" src={show.image.medium} />
                  ) : (
                    <img alt="" src={noImage} />
                  )}
                  {show && show.rating.average !== null ? (
                    <h4>Rating: {show.rating.average}</h4>
                  ) : null}
                </div>
                <div className="title-description">
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h6"
                  >
                    {show && (
                      <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
                    )}
                  </Typography>
                </div>
              </div>
            </Card>
          </Paper>
        </div>
      )}
      <div className="seasons">
        {error && <ErrorMessage error={error}></ErrorMessage>}
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
            {seasons &&
              seasons.map((season) => (
                <Link
                  to={`/${show && show.name}/${season.id}/episodes`}
                  key={uuid_v4()}
                  className="link"
                >
                  <Seasons show={show} season={season} key={uuid_v4()} />
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Show;
