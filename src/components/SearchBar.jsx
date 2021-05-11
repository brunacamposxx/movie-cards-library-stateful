// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
	const { // Requisito 1
  render() {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
        {/* Requisito 2 */}
      <form data-testid="search-bar-form">
          {/* Requisito 3 */}
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
						type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
					{/* Requisito 4 */}
				<label htmlFor="checkbox-input" data-testid="checkbox-input-label">
					Mostrat somente favoritos
					<input
					type="checkbox"
					checked={ bookmarkedOnly }
					onChange={ onBookmarkedChange }
					data-testid="checkbox-input"

					/>
				</label>
      </form>
    );
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
