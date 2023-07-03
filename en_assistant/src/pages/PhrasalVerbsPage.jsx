import '../styles/phrasalverbs.css'
import TextToSpeech from '../components/TextToSpeech'
import data from '../data/phrasal_verbs.json';

export function PhrasalVerbsPage() {
    
    data.sort((a, b)=>{
        return a.present.join(" ").localeCompare(b.present.join(" "))
    })
    console.log(data)
    const experiences = data
    
    const en_voices = [
        'Google US English',
        'Google UK English Female',
        'Google UK English Male',
    ]
    const es_voices = [
        'Google español',
        'Google español de Estados Unidos'
    ]
    const en_voice = en_voices[0];
    const es_voice = es_voices[0];
    const rate = 0.8;
    return (
        <div className='pv-container'>
            {experiences.map(data => (
                <div className='pv-row'>
                    <TextToSpeech data={data} en_voice={en_voice} es_voice={es_voice} rate={rate} />
                </div>
            ))}
        </div>
    )

}