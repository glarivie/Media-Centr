import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { get } from 'lodash'

import Navigation from '../../components/Navigation'

import actions from '../../actions'

import './App.scss'

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    genres: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.updateWindowWidth()
    window.addEventListener('resize', this.updateWindowWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth)
  }

  updateWindowWidth = () => {
    const { dispatch } = this.props
    const width = findDOMNode(this._app).getBoundingClientRect().width

    dispatch(actions.app.updateWindowWidth(width))
  }

  render() {
    const { children, location, genres } = this.props

    return (
      <div className="App" ref={c => this._app = c}>
        <Navigation pathname={location.pathname} genres={genres} />
        <main>{children}</main>
      </div>
    )
  }
}

const mapStateToProps = ({ movies }) => ({
  genres: get(movies, 'genres', [])
})

export default connect(mapStateToProps)(App)
