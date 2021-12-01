import './Display.css'

function Display({ report, catchphrases }) {
  return (
    <div className="display">
      <p className="report">
        You have changed the head {report['Head']} times, the body {report['Middle']} times, and the
        pants {report['Bottom']} times. And nobody can forget your characters classic catchphrases:
      </p>
      <div className="catchphrases-display">
        {catchphrases.map((phrase) => (
          <p key={phrase}>{phrase}</p>
        ))}
      </div>
    </div>
  )
}

export default Display
