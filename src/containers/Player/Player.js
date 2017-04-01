import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'

import './Player.scss'

const Player = ({ movie, width = 320}) => (
  <div className="Player">
    <video width={width} controls autoPlay>
      <source src={get(movie, 'src')} type={get(movie, 'format', 'video/mp4')} />
    Your browser does not support the video tag.
    </video>
  </div>
)

Player.propTypes = {
  movie: PropTypes.object,
  width: PropTypes.number,
}

const mapStateToProps = ({ movies, app }, { params }) => ({
  movie: get(movies, 'movies', []).find(({ _id }) => _id === params.id),
  width: get(app, 'width', 320) * 0.8,
})

export default connect(mapStateToProps)(Player)
