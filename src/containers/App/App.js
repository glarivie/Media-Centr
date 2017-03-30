import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import cx from 'classnames'

import actions from '../../actions'

import './App.css'

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
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
    const { children } = this.props

    return (
      <div className="App" ref={c => this._app = c}>
        <main>
          YOLO
          {children}
        </main>
      </div>
    )
  }
}

export default connect()(App)
