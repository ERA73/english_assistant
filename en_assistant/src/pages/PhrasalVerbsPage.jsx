import '../styles/phrasalverbs.css'
import TextToSpeech from '../components/TextToSpeech'

export function PhrasalVerbsPage() {
    const experiences = [
        { "past": ["add", "up"], "present": ["add", "up"] },
        { "past": ["blow", "up"], "present": ["blow", "up"] },
    ]
    const en_voices = [
        'Google US English',
        'Google UK English Female',
        'Google UK English Male',
    ]
    const es_voices = [
        'Google español',
        'Google español de Estados Unidos'
    ]
    const voice = en_voices[1];
    const rate = 0.8;
    return (
        <div className='pv-container'>
            {experiences.map(data => (
                <div className='pv-row'>
                    <TextToSpeech text={data["past"]} voice={voice} rate={rate} />
                    <TextToSpeech text={data["present"]} voice={voice} rate={rate} />
                </div>
            ))}
        </div>
    )

}