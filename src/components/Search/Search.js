import React, { PropTypes } from 'react'

import './Search.scss'

const Search = props => (
  <div className="Search">
    <i className="search-icon ion-search" />
    <input type="search" {...props} />
  </div>
)

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default Search
