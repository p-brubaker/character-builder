/* eslint-disable indent */
import React from 'react'
import './Character.css'

function Character({ head, middle, bottom }) {
  return (
    <div className="character-container">
      <div className="character">
        <div
          className="bg head"
          style={{ backgroundImage: `url('assets/${head.toLowerCase()}-head.png')` }}
        ></div>
        <div
          className="bg middle"
          style={{ backgroundImage: `url('assets/${middle.toLowerCase()}-middle.png')` }}
        ></div>
        <div
          className="bg bottom"
          style={{ backgroundImage: `url('assets/${bottom.toLowerCase()}-pants.png')` }}
        ></div>
      </div>
    </div>
  )
}

export default Character
