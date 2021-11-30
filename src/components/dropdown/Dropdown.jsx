import React from 'react'

function Dropdown({ options, label }) {
  return (
    <div className="dropdown">
      <label htmlFor={label}>{label}</label>
      <select name={label}>
        {options.map((option) => (
          <>
            <option value={option} key={option}>
              {option}
            </option>
          </>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
