/* eslint-disable indent */
import React from 'react'
import './Character.css'

import birdHead from '../../images/bird-head.png'
import dogHead from '../../images/dog-head.png'
import duckHead from '../../images/duck-head.png'
import horseHead from '../../images/horse-head.png'
import blueMiddle from '../../images/blue-middle.png'
import dressMiddle from '../../images/dress-middle.png'
import pinkMiddle from '../../images/pink-middle.png'
import redMiddle from '../../images/red-middle.png'
import singleLeg from '../../images/single_leg-pants.png'
import whitePants from '../../images/white-pants.png'
import bluePants from '../../images/blue-pants.png'

function Character({ head, middle, bottom }) {
  return (
    <div className="character-container">
      <div className="character">
        <div
          className="bg head"
          style={
            head === 'Bird'
              ? { backgroundImage: `url(${birdHead})` }
              : head === 'Dog'
              ? { backgroundImage: `url(${dogHead})` }
              : head === 'Duck'
              ? { backgroundImage: `url(${duckHead})` }
              : { backgroundImage: `url(${horseHead})` }
          }
        ></div>
        <div
          className="bg middle"
          style={
            middle === 'Fancy'
              ? { backgroundImage: `url(${dressMiddle})` }
              : middle === 'Blue'
              ? { backgroundImage: `url(${blueMiddle})` }
              : middle === 'Pink'
              ? { backgroundImage: `url(${pinkMiddle})` }
              : { backgroundImage: `url(${redMiddle})` }
          }
        ></div>
        <div
          className="bg bottom"
          style={
            bottom === 'Single Leg'
              ? { backgroundImage: `url(${singleLeg})` }
              : bottom === 'White Pants'
              ? { backgroundImage: `url(${whitePants})` }
              : { backgroundImage: `url(${bluePants})` }
          }
        ></div>
      </div>
    </div>
  )
}
export default Character
