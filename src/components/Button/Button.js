import React, { PropTypes } from 'react'
import cx from 'classnames'

import './Button.scss'

const Button = ({ type = 'button', icon, version, children, onClick, disabled = false }) => (
  <button
    type={type}
    className={cx('Button', `btn-${version}`)}
    onClick={onClick}
    disabled={disabled}
  >
    {!!icon && <i className={cx('icon', icon)} />}
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  version: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
