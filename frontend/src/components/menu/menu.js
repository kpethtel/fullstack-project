import React, { useState } from 'react';
import GifSearch from '../gifSearch/gifSearch.js'

function Menu() {
  const [view, setView] = useState(null);

  const gifSearchButton = () => {
    return <button label="searchButton" onClick={() => setView('search')}>Search for gifs</button>;
  }

  const renderGifSearch = () => {
    return (
      <div>
        <button label="backButton" onClick={() => setView(null)}>Back to menu</button>
        <GifSearch />
      </div>
    )
  }

  const renderView = () => {
    switch (view) {
      case 'search':
        return renderGifSearch();
      default:
        return gifSearchButton();
    }
  }

  return (
    <div className='menu'>
      {renderView()}
    </div>
  );
}

export default Menu;
