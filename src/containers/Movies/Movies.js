import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { get, isUndefined } from 'lodash'
import fuzzy from 'fuzzy'

import Movie from '../../components/Movie'
import Search from '../../components/Search'

import './Movies.scss'

class Movies extends Component {
  static propTypes = {
    pending: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
  }

  state = {
    search: '',
    results: this.props.movies,
  }

  handleSearch = ({ target: { value } }) => {
    const { movies } = this.props

    this.setState({
      search: value,
      results: fuzzy
        .filter(value, movies, { extract: ({ title }) => title })
        .map(({ original }) => original),
    })
  }

  render () {
    const { pending, location } = this.props
    const { search, results } = this.state

    if (pending) { return false }

    return (
      <div className="Movies">
        <Search
          value={search}
          onChange={this.handleSearch}
          placeholder={`Search among ${results.length} movies`}
        />
        <div className="list">
          {results.map((movie, index) => {
            const filter = get(location, 'query.genre')

            if (isUndefined(filter) || get(movie, 'genre', '').includes(filter))
              return <Movie key={index} {...movie} />

            return false
          })}
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ movies }) => ({
  pending: get(movies, 'pending', false),
  movies: get(movies, 'movies', []),
})

export default connect(mapStateToProps)(Movies)
