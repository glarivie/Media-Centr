import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'

import PathChooser from '../../components/PathChooser'

import actions from '../../actions'

import './Home.css'

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    pending: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired,
  }

  onPathSelect = files => {
    console.log('HOME', 'onPathSelect', files)

    this.props.dispatch(actions.movies.fetchMoviesInfos(files))
  }

  render () {
    const { pending, movies } = this.props

    console.log('HOME', movies)

    return (
      <div className='Home'>
        <PathChooser onPathSelect={this.onPathSelect} />
        {pending && <p>LOADING...</p>}

        {!!movies.length && (
          <video width="320" height="240" controls>
            <source src={movies[0].src} type={movies[0].format} />
          </video>
        )}


        <div className="posters">
          {movies.map(({ poster, title }, index) => (
            <img
              key={index}
              src={poster}
              alt={title}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ movies }) => ({
  pending: get(movies, 'pending', false),
  movies: get(movies, 'movies', []),
})

export default connect(mapStateToProps)(Home)
