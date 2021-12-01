import React from 'react'
import './InputField.css'

function InputField(props) {
  const {
    head,
    middle,
    bottom,
    catchphrasesInput,
    handleSelect,
    setCatchphrasesInput,
    updateCatchphrases,
  } = props

  return (
    <div className="input-field">
      <div className="picker">
        <label htmlFor="Head">
          Head
          <select value={head} name="Head" onChange={(e) => handleSelect(e.target.value, 'Head')}>
            {['Duck', 'Dog', 'Bird', 'Horse'].map((choice) => (
              <option value={choice} key={choice}>
                {choice}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Middle">
          Middle
          <select
            value={middle}
            name="Middle"
            onChange={(e) => handleSelect(e.target.value, 'Middle')}
          >
            {['Fancy', 'Pink', 'Red', 'Blue'].map((choice) => (
              <option value={choice} key={choice}>
                {choice}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Bottom">
          Bottom
          <select
            value={bottom}
            name="Bottom"
            onChange={(e) => handleSelect(e.target.value, 'Bottom')}
          >
            {['White', 'Blue', 'Leg'].map((choice) => (
              <option value={choice} key={choice}>
                {choice}
              </option>
            ))}
          </select>
        </label>
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
    </div>
  )
}

export default InputField
