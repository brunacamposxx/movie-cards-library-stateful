// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      moviesLibrary: props.movies,
      movieSet: props.movies,
    };
  }

  search = ({ target }) => {
    const value = (target.type === 'checkbox' ? target.checked : target.value);
    this.changes(target.name, value);
    this.setState({
      [target.name]: value,
    });
  }

  changes = (name, value) => {
    const { moviesLibrary, movieSet } = this.state;
    if (name === 'bookmarkedOnly') {
      const array = value ? moviesLibrary.filter((movie) => (movie.bookmarked === value))
        : (movieSet);
      this.setState({ moviesLibrary: array });
    }
    if (name === 'selectedGenre') {
      const array = value !== '' ? movieSet.filter((movie) => (movie.genre === value))
        : (movieSet);
      this.setState({ moviesLibrary: array });
    }
    if (name === 'searchText') {
      const array = value !== '' ? movieSet.filter((movie) => (movie
        .title.includes(value)) || (movie.subtitle.includes(value))
        || (movie.storyline.includes(value)))
        : (movieSet);
      this.setState({ moviesLibrary: array });
    }
  }

  render() {
    const { moviesLibrary, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.search }
          onBookmarkedChange={ this.search }
          onSelectedGenreChange={ this.search }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ moviesLibrary } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
