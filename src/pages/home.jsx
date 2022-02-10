import React, { useState, useEffect } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import ErrorMessage from '../components/ErrorMessage';
import { useListContext } from '../contexts/ListContextProvider';
import DisplayCategory from '../components/DisplayCategory';
import CircularProgress from '@material-ui/core/CircularProgress';
import MyList from '../components/MyList';
import Navbar from '../components/Navbar';
import NotFound from '../components/NotFound';

function HomePage() {
  const [shows, setShows] = useState();
  const { myList, setMyList, showSearch, setShowSearch } = useListContext();
  const [mostPopular, setMostPopular] = useState();
  const [genres, setGenres] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  setShowSearch(true);

  async function fetchDisplayCategory() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.tvmaze.com/shows`);
      if (!response.ok) {
        setError(true);

        throw Error;
      }
      setLoading(false);
      const data = await response.json();
      setMostPopular(
        data
          .sort((a, b) => {
            return b.rating.average - a.rating.average;
          })
          .slice(0, 20)
          .sort(() => Math.random() - 0.5)
          .slice(0, 8),
      );
      setGenres(data);
    } catch (e) {
      setError('Something went wrong, please try again later');
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchDisplayCategory();
  }, []);

  function handleDelete(id) {
    let newList = myList.filter((item) => item.id !== id);
    setMyList(newList);
    return id;
  }
  function showGenres(category) {
    const test = genres
      ? genres.filter((film) => {
          return film.genres.includes(category);
        })
      : [];
    return test;
  }

  const getGenreList = (genre) =>
    showGenres(genre)
      .sort(() => Math.random() - 0.7)
      .slice(0, 8)
      .map((show) => <DisplayCategory show={show} key={uuid_v4()} />);

  const categoryList = (genre) =>
    loading ? (
      <CircularProgress />
    ) : (
      <div className="my-list">{getGenreList(genre)}</div>
    );

  return (
    <div className="App">
      <Navbar
        showSearch={showSearch}
        fetchDisplayCategory={fetchDisplayCategory}
        setShows={setShows}
      />
      {error && <ErrorMessage error={error}></ErrorMessage>}
      {shows && shows.length === 0 && <NotFound />}
      {!shows && (
        <div>
          <h1 className="genre">My List</h1>

          {loading ? (
            <CircularProgress />
          ) : (
            <div className="my-list">
              {myList &&
                myList.map((show) => (
                  <MyList
                    key={uuid_v4()}
                    show={show}
                    handleDelete={handleDelete}
                  />
                ))}
            </div>
          )}
          <h1 className="genre">Most popular</h1>
          {loading ? (
            <CircularProgress />
          ) : (
            <div className="my-list">
              {mostPopular &&
                mostPopular.map((show) => (
                  <DisplayCategory show={show} key={uuid_v4()} />
                ))}
            </div>
          )}
          <h1 className="genre">Comedies</h1>
          {categoryList('Comedy')}
          <h1 className="genre">Dramas</h1>
          {categoryList('Drama')}
          <h1 className="genre">Thrillers</h1>
          {categoryList('Thriller')}
        </div>
      )}
      <div className="movie-list">
        {shows &&
          shows.map((show) => (
            <DisplayCategory show={show.show} key={uuid_v4()} />
          ))}
      </div>
    </div>
  );
}

export default HomePage;
