import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'

import './Navigation.scss'

const Navigation = ({ pathname, genres }) => (
  <nav className="Navigation">
    {!genres.length ? (
      <Link
        to="/"
        className={cx('item', { active: pathname === '/' })}
      >
        Choose folder
      </Link>
    ) : (
      <Link
        to="/movies"
        className={cx('item', { active: pathname === '/movies' })}
      >
        All
      </Link>
    )}

    {!!genres.length && genres.map(genre => (
      <Link
        key={genre}
        to={`/movies?genre=${genre}`}
        className={cx('item', { active: pathname === `/movies?genre=${genre}` })}
      >
        {genre}
      </Link>
    ))}
  </nav>
)

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
}

export default Navigation
