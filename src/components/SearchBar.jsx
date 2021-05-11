// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>

      </div>

    )
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;

// ### 1 - Crie um componente chamado `<SearchBar />`

// Esse componente renderizará uma barra com filtros acima da listagem de cartões. Quais cartões serão mostrados no componente `<MovieList />` dependerá dos filtros escolhidos. `<SearchBar />` deve receber como props:

//   - `searchText`, uma string
//   - `onSearchTextChange`, uma callback
//   - `bookmarkedOnly`, um boolean
//   - `onBookmarkedChange`, uma callback
//   - `selectedGenre`, uma string
//   - `onSelectedGenreChange`, uma callback

// **O que será verificado:**
//   - Será validado se o componente `<SearchBar />`, recebendo as devidas props, renderiza com sucesso