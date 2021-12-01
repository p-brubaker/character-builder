import './App.css'
import InputField from './components/inputField/InputField'
import Character from './components/character/Character'
import Display from './components/display/Display'
import { useState } from 'react'

function App() {
  const [head, setHead] = useState('')
  const [middle, setMiddle] = useState('')
  const [bottom, setBottom] = useState('')
  const [catchphrases, setCatchphrases] = useState([])
  const [catchphrasesInput, setCatchphrasesInput] = useState('')
  const [report, setReport] = useState({ Head: 0, Middle: 0, Bottom: 0 })

  const updateCatchphrases = (newCatchphrase) => {
    setCatchphrases((prev) => [...prev, newCatchphrase])
    setCatchphrasesInput('')
  }

  const handleSelect = (value, bodyPart) => {
    if (bodyPart === 'Head') setHead(value)
    if (bodyPart === 'Middle') setMiddle(value)
    if (bodyPart === 'Bottom') setBottom(value)
    const newReport = report
    newReport[bodyPart]++
    setReport(newReport)
  }

  return (
    <div className="App">
      <div className="left">
        <InputField
          head={head}
          middle={middle}
          bottom={bottom}
          catchphrases={catchphrases}
          handleSelect={handleSelect}
          updateCatchphrases={updateCatchphrases}
          catchphrasesInput={catchphrasesInput}
          setCatchphrasesInput={setCatchphrasesInput}
        />
        <Display report={report} catchphrases={catchphrases} />
      </div>
      <div className="right">
        <Character head={head} middle={middle} bottom={bottom} />
      </div>
    </div>
  )
}

export default App
