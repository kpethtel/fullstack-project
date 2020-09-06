import React, { useState } from 'react';
import { getGifs } from '../../actions/getGifs'
import { createFavorite } from '../../actions/createFavorite'
import './gifSearch.css';

function GifSearch() {

  const [searchTerm, setSearchTerm] = useState('');
  const [giphyURLs, setGiphyURLs] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const searchForImage = (event) => {
    event.preventDefault();
    setImageIndex(0);
    getGifs(searchTerm, setGiphyURLs);
  }

  const handleSearchInput = (event) => {
    const text = event.target.value;
    setSearchTerm(text);
  }

  const addToFavorites = () => {
    const args = {
      search_term: searchTerm,
      url: giphyURLs[imageIndex],
      format: 'gif',
      source: 'giphy'
    }
    createFavorite(args)
  }

  const next = () => {
    setImageIndex(prevState => (prevState + 1 === giphyURLs.length) ? 0 : prevState + 1);
  }

  const previous = () => {
    setImageIndex(prevState => (prevState === 0) ? giphyURLs.length - 1 : prevState - 1);
  }

  const renderTextInput = () => {
    return (
      <form onSubmit={searchForImage}>
        <label>Search for a gif</label>
        <br/>
        <input
          data-testid='input'
          name="searchTerm"
          onChange={handleSearchInput}
          placeholder="Search"
          type="text"
          value={searchTerm}
        />
      </form>
    )
  }

  const renderImageSection = () => {
    if (giphyURLs.length === 0) { return null }
    return (
      <div className="imageSection" >
        <div className="controls">
          <button label="previous" onClick={previous}>Previous</button>
          <button label="favorite" onClick={addToFavorites}>Add to Favorites</button>
          <button label="next" onClick={next}>Next</button>
        </div>
        <img src={giphyURLs[imageIndex]} alt="gif" />
      </div>
    )
  }

  return (
    <div className="gifSearch" >
      {renderTextInput()}
      {renderImageSection()}
    </div>
  )
}

export default GifSearch