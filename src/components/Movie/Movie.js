import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { get } from 'lodash'

import defaultPoster from '../../assets/default_poster.jpg'
import browserHistory from '../../browserHistory'

import Button from '../../components/Button'

import './Movie.scss'

const Movie = props => (
  <div className="Movie">
    <div
      className="poster"
      style={{ backgroundImage: `url(${get(props, 'poster', defaultPoster)})` }}
    >
      <Link className="mask" to={`/play/${props._id}`}>
        <div className="icon">
          <i className="ion-play" />
        </div>
      </Link>
    </div>
    <div className="details">
      <h2 className="title">{get(props, 'title', '')}</h2>
      <p className="director"><label>Director:</label> {get(props, 'director', '')}</p>
      <p className="actors"><label>Actors:</label> {get(props, 'actors', '')}</p>
      <p className="released"><label>Released:</label> {get(props, 'released', '')}</p>
      <p className="runtime"><label>Runtime:</label> {get(props, 'runtime', '')}</p> {/* TODO: convert min to hours */}
      <div className="ratings">
        {get(props, 'ratings', []).map(({ Source, Value }, index) => (
          <span className="single-rating" key={index}><label>{Source}:</label> {Value}</span>
        ))}
      </div>
      <div className="actions">
        <Button
          icon="ion-information-circled"
          version="secondary"
          onClick={() => browserHistory.push(`/single/${props._id}`)}
        >
          Informations
        </Button>
        <Button
          icon="ion-play"
          version="action"
          onClick={() => browserHistory.push(`/play/${props._id}`)}
        >
          Play Movie
        </Button>
      </div>
    </div>
  </div>
)

Movie.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  director: PropTypes.string,
  actors: PropTypes.string,
  released: PropTypes.string,
  runtime: PropTypes.string,
  ratings: PropTypes.array,
}

export default Movie
