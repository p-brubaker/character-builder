import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import './InputField.css'

function InputField() {
  return (
    <div className="input-field">
      <div className="picker">
        {[
          { options: ['Duck', 'Bird', 'Dog', 'Horse'], label: 'Head' },
          { options: ['Fancy', 'Pink', 'Red', 'Blue'], label: 'Middle' },
          { options: ['White Pants', 'Single Leg', 'Blue Jeans'], label: 'Bottom' },
        ].map((category) => (
          <Dropdown key={category.label} label={category.label} options={category.options} />
        ))}
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
