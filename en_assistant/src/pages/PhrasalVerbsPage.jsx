import '../styles/phrasalverbs.css'
import TextToSpeech from '../components/TextToSpeech'
import data from '../data/phrasal_verbs.json';

export function PhrasalVerbsPage() {
    
    data.sort((a, b)=>{
        return a.present.join(" ").localeCompare(b.present.join(" "))
    })
    const experiences = data
    
    const en_voices = [
        'Microsoft Zira - English (United States)',
        'Microsoft David - English (United States)',
        'Microsoft Zira - English (United States)',
        'Microsoft David - English (United States)'
    ]
    const es_voices = [
        'Microsoft Laura - Spanish (Spain)',
        'Microsoft Pablo - Spanish (Spain)'
    ]
    const en_voice = en_voices[2];
    const es_voice = es_voices[1];
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