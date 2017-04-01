import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import Navigation from '../../components/Navigation'

import actions from '../../actions'

import './App.scss'

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
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
    const { children, location } = this.props

    return (
      <div className="App" ref={c => this._app = c}>
        <Navigation pathname={location.pathname} />
        {children}
      </div>
    )
  }
}

export default connect()(App)
