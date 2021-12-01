import './Display.css'

function Display({ report, catchphrases }) {
  return (
    <div className="display">
      <p className="report">
        You have changed the head {report['Head']} time{report['Head'] !== 1 ? 's' : ''}, the body
        {' ' + report['Middle']} time{report['Middle'] !== 1 ? 's' : ''}, and the pants
        {' ' + report['Bottom'] + ' '}
        time{report['Bottom'] !== 1 ? 's' : ''}. And nobody can forget your characters classic
        catchphrases:
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
