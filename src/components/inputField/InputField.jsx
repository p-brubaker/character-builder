import React from 'react'
import './InputField.css'

function InputField() {
  return (
    <div className="input-field">
      <div className="picker">
        <select name="head" id="head">
          <option value="duck">Duck</option>
          <option value="bird">Bird</option>
          <option value="dog">Dog</option>
          <option value="horse">Horse</option>
        </select>
        <select name="middle" id="middle">
          <option value="fancy">Fancy</option>
          <option value="blue">Blue</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
        <select name="bottom" id="bottom">
          <option value="white_pants">White Pants</option>
          <option value="single_leg">Single Leg</option>
          <option value="blue_jeans">Blue Jeans</option>
        </select>
      </div>
      <div>
        <label htmlFor="catchphrases-input">Add a catch phrase</label>
        <input type="text" name="catchphrases-input" id="catchphrases-input" />
        <button type="submit">Add</button>
      </div>
      <p className="report">
        You have changed the head {0} times, the body {0} times, and the pants {0} times. And nobody
        can forget your characters classic catchphrases:
      </p>
      <div className="catchphrases-display">Catchphrases go here</div>
    </div>
  )
}

export default InputField
