import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { get, isUndefined } from 'lodash'

import Movie from '../../components/Movie'

import './Movies.scss'

const Movies = ({ pending, movies, location }) => (
  <div className="Movies">
    {movies.map((movie, index) => {
      const filter = get(location, 'query.genre')

      if (isUndefined(filter) || get(movie, 'genre', '').includes(filter))
        return <Movie key={index} {...movie} />

      return false
    })}
  </div>
)

Movies.propTypes = {
  pending: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
}

const mapStateToProps = ({ movies }) => ({
  pending: get(movies, 'pending', false),
  movies: get(movies, 'movies', []),
})

export default connect(mapStateToProps)(Movies)
