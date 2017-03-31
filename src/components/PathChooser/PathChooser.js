import React, { PropTypes, Component } from 'react'

import './PathChooser.css'

const URL = window.URL || window.webkitURL

class PathChooser extends Component {
  static propTypes = {
    onPathSelect: PropTypes.func.isRequired,
  }

  componentDidMount () {
    this._file.directory = true
    this._file.nwdirectory = true
    this._file.webkitdirectory = true
  }

  handleChange = ({ target: { files } }) => {
    this.props.onPathSelect(
      Array.from(files).reduce((acc, file) => {
        if (!file.type.includes('video') || file.size < 31016764)
          return acc

        return acc.concat({
          name: file.name,
          format: file.type,
          src: URL.createObjectURL(file),
        })
      }, [])
    )
  }

  render () {
    return (
      <div className="PathChooser">
        <input
          type="file"
          name="path"
          ref={f => this._file = f}
          onChange={this.handleChange}
          multiple
          hidden
        />
        <button type="button" onClick={() => this._file.click()}>
          Choose directory
        </button>
      </div>
    )
  }
}

export default PathChooser
