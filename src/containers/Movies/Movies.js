import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'

import Movie from '../../components/Movie'

import './Movies.scss'

const Movies = ({ pending, movies }) => (
  <div className="Movies">
    {movies.map((movie, index) => <Movie key={index} {...movie} />)}
  </div>
)

Movies.propTypes = {
  pending: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
}

const mapStateToProps = ({ movies }) => ({
  pending: get(movies, 'pending', false),
  movies: get(movies, 'movies', []),
})

export default connect(mapStateToProps)(Movies)
