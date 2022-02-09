import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function SearchShow({ fetchData }) {
  const [searchShow, setSearchShow] = useState();

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      setSearchShow(e.target.value);
      e.preventDefault();
      fetchData({ searchShow });
    }
  };
  const handleOnClick = (e) => {
    if (searchShow === '' || searchShow === undefined) {
      return;
    }

    fetchData({ searchShow });
  };

  return (
    <div className="search-show_enter">
      <form onKeyPress={handleEnterKey}>
        <TextField
          size="small"
          style={{
            background: 'white',
            borderRadius: '4px',
          }}
          onChange={(e) => {
            setSearchShow(e.target.value);
          }}
          type="text"
          variant="outlined"
          color="secondary"
          placeholder="Search..."
          fullWidth
        />
      </form>

      <Button
        type="submit"
        variant="contained"
        onClick={handleOnClick}
        color="primary"
        style={{ margin: '0px 35px 0px 5px' }}
      >
        Enter
      </Button>
    </div>
  );
}

export default SearchShow;
