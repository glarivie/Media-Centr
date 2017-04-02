import axios from 'axios'
import tnp from 'torrent-name-parser'
import { mapKeys, uniq } from 'lodash'

import { uniqueID } from '../helpers'

const fetchMoviesInfos = files => async dispatch => {
  dispatch({ type: 'FETCH_MOVIES_INFOS_PENDING' })

  const movies = files.map(file => ({
    ...file,
    ...tnp(file.name),
  }))

  try {
    for (let index = 0; movies[index]; index++) {
      const { title, year } = movies[index]
      const { data, status } = await axios.get(`http://www.omdbapi.com/?t=${title}&y=${year}&plot=full`)

      if (status !== 200) continue

      movies[index] = {
        ...movies[index],
        ...mapKeys(data, (_v, key) => key.toLowerCase()),
        _id: uniqueID(),
      }
    }

    const genres = uniq(movies.reduce((acc, { genre }) => acc.concat(genre.split(', ')), [])).sort()

    dispatch({ type: 'FETCH_MOVIES_INFOS_SUCCESS', data: movies })
    dispatch({ type: 'FETCH_MOVIES_GENRE_SUCCESS', data: genres })
  } catch (err) {
    console.error(err)
  }
}

export default {
  fetchMoviesInfos,
}
