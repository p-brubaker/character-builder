/* eslint-disable indent */
import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import './InputField.css'

function InputField(props) {
  const {
    head,
    setHead,
    middle,
    setMiddle,
    bottom,
    setBottom,
    catchphrasesInput,
    setCatchphrasesInput,
    updateCatchphrases,
  } = props

  return (
    <div className="input-field">
      <div className="picker">
        <Dropdown
          options={['Duck', 'Dog', 'Bird', 'Horse']}
          label="Head"
          value={head}
          onChange={setHead}
        />
        <Dropdown
          options={['Fancy', 'Pink', 'Red', 'Blue']}
          label="Middle"
          value={middle}
          onChange={setMiddle}
        />
        <Dropdown
          options={['White Pants', 'Blue Jeans', 'Single Leg']}
          label="Bottom"
          value={bottom}
          onChange={setBottom}
        />
      </div>
      <div>
        <label htmlFor="catchphrases-input">Add a catch phrase</label>
        <input
          type="text"
          value={catchphrasesInput}
          onChange={(e) => setCatchphrasesInput(e.target.value)}
          name="catchphrases-input"
          id="catchphrases-input"
        />
        <button type="submit" onClick={() => updateCatchphrases(catchphrasesInput)}>
          Add
        </button>
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
