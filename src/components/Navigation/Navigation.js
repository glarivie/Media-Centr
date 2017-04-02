import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'
import { isUndefined } from 'lodash'

import './Navigation.scss'

const Navigation = ({ query, genres }) => (
  <nav className="Navigation">
    {!genres.length ? (
      <Link
        to="/"
        className={cx('item', { active: isUndefined(query) })}
      >
        Choose folder
      </Link>
    ) : (
      <Link
        to="/movies"
        className={cx('item', { active: isUndefined(query) })}
      >
        All
      </Link>
    )}

    {!!genres.length && genres.map(genre => (
      <Link
        key={genre}
        to={`/movies?genre=${genre}`}
        className={cx('item', { active: query === genre })}
      >
        {genre}
      </Link>
    ))}
  </nav>
)

Navigation.propTypes = {
  query: PropTypes.string,
  genres: PropTypes.array.isRequired,
}

export default Navigation
