import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'

import PathChooser from '../../components/PathChooser'

import browserHistory from '../../browserHistory'

import actions from '../../actions'

import './Home.scss'

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    pending: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired,
  }

  componentWillReceiveProps (nextProps) {
    const { movies } = this.props

    if (!nextProps.pending && !!nextProps.movies.length && movies !== nextProps.movies) {
      browserHistory.push('/movies')
    }
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
      </div>
    )
  }
}

const mapStateToProps = ({ movies }) => ({
  pending: get(movies, 'pending', false),
  movies: get(movies, 'movies', []),
})

export default connect(mapStateToProps)(Home)
