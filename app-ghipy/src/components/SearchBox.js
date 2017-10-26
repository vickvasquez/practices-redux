import React from 'react'
import PropTypes from 'prop-types'
import Styles from './SearchBox.css'

const SearchBox = ( { onKeyPress } ) => (
    <div className={ Styles.searchBox }>
        <input
            type="search"
            className={ Styles.searchInput }
            onKeyPress={ onKeyPress }
            placeholder="Busca tu gif favorito"
        />
    </div>
)

SearchBox.propTypes = {
    onKeyPress: PropTypes.func.isRequired,
}

export default SearchBox
