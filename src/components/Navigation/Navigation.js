import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'

import './Navigation.scss'

const Navigation = ({ pathname }) => (
  <nav className="Navigation">
    <Link
      className={cx('item', { active: pathname === '/' })}
      to="/"
    >
      Home
    </Link>
    <Link
      className={cx('item', { active: pathname === '/movies' })}
      to="/movies"
    >
      Movies
    </Link>
  </nav>
)

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Navigation
