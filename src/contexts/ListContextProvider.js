import React, { useState, createContext, useContext } from 'react';

const initialPlayList = [
  {
    id: 431,
    url: 'https://www.tvmaze.com/shows/431/friends',
    name: 'Friends',
    type: 'Scripted',
    language: 'English',
    genres: ['Comedy', 'Romance'],
    status: 'Ended',
    runtime: 30,
    averageRuntime: 30,
    premiered: '1994-09-22',
    officialSite: null,
    schedule: {
      time: '20:00',
      days: ['Thursday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 100,
    network: {
      id: 1,
      name: 'NBC',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 3616,
      thetvdb: 79168,
      imdb: 'tt0108778',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/41/104550.jpg',
    },
    summary:
      '<p>Six young (20-something) people from New York City (Manhattan), on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.</p><p>This average group of buddies goes through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend.</p>',
    updated: 1622465393,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/431',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/40881',
      },
    },
  },
  {
    id: 82,
    url: 'https://www.tvmaze.com/shows/82/game-of-thrones',
    name: 'Game of Thrones',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Adventure', 'Fantasy'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 61,
    premiered: '2011-04-17',
    officialSite: 'http://www.hbo.com/game-of-thrones',
    schedule: {
      time: '21:00',
      days: ['Sunday'],
    },
    rating: {
      average: 9,
    },
    weight: 98,
    network: {
      id: 8,
      name: 'HBO',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: {
      id: 22,
      name: 'HBO Go',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    dvdCountry: null,
    externals: {
      tvrage: 24493,
      thetvdb: 121361,
      imdb: 'tt0944947',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg',
    },
    summary:
      '<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>',
    updated: 1611261307,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/82',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1623968',
      },
    },
  },
];
const Context = createContext();

const ListContextProvider = ({ children }) => {
  const [myList, setMyList] = useState(initialPlayList);
  const [showSearch, setShowSearch] = useState(true);

  return (
    <Context.Provider value={{ myList, setMyList, showSearch, setShowSearch }}>
      {children}
    </Context.Provider>
  );
};

export function useListContext() {
  return useContext(Context);
}
export default ListContextProvider;
