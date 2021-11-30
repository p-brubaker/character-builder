import './App.css'
import InputField from './components/inputField/InputField'
import Character from './components/character/Character'
import { useState } from 'react'

function App() {
  const [head, setHead] = useState('')
  const [middle, setMiddle] = useState('')
  const [bottom, setBottom] = useState('')
  const [catchphrases, setCatchphrases] = useState([])
  const [catchphrasesInput, setCatchphrasesInput] = useState('')

  const updateCatchphrases = (newCatchphrase) => {
    setCatchphrases((prev) => [...prev, newCatchphrase])
  }

  return (
    <div className="App">
      <InputField
        head={head}
        setHead={setHead}
        middle={middle}
        setMiddle={setMiddle}
        bottom={bottom}
        setBottom={setBottom}
        catchphrases={catchphrases}
        updateCatchphrases={updateCatchphrases}
        catchphrasesInput={catchphrasesInput}
        setCatchphrasesInput={setCatchphrasesInput}
      />
      <Character head={head} middle={middle} bottom={bottom} />
    </div>
  )
}

export default App
