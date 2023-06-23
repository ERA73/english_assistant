import '../styles/phrasalverbs.css'
import TextToSpeech from '../components/TextToSpeech'

export function PhrasalVerbsPage() {
  const experiences = [
    {"past":["add", "up"], "present":["add", "up"]},
    {"past":["blow", "up"], "present":["blow", "up"]},
  ]
  return (
    <div className='pv-container'>
      {experiences.map(data => (
          <div><TextToSpeech text = {data["past"]}/> <TextToSpeech text = {data["present"]}/></div>
      ))}
    </div>
  )
}