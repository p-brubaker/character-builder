import React from 'react'

function Dropdown({ options, label, onChange }) {
  return (
    <div className="dropdown">
      <label htmlFor={label}>{label}</label>
      <select name={label} onChange={(e) => onChange(e.target.value)}>
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
