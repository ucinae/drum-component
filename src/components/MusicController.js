import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/MusicController.scss'

// 재생, 다운, 생성 버튼
class MusicController extends Component {
  render() {
    return (
      <div className="music-controller">
        <button className="btn">
          <FontAwesomeIcon icon="play" className="fa-6x" />
        </button>
        <button className="btn">
          <FontAwesomeIcon icon="redo-alt" className="fa-6x" />
        </button>
        <button className="btn">
          <FontAwesomeIcon icon="plus" className="fa-6x" />
        </button>
        <button className="btn">
          <FontAwesomeIcon icon="download" className="fa-6x" />
        </button>
      </div>
    )
  }
}

export default MusicController