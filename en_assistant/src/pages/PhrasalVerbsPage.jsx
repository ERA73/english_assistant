import '../styles/phrasalverbs.css'
import TextToSpeech from '../components/TextToSpeech'
import data from '../data/phrasal_verbs.json';

export function PhrasalVerbsPage() {

    data.sort((a, b) => {
        return a.present.join(" ").localeCompare(b.present.join(" "))
    })
    const experiences = data

    const voices_SSU = {
        "en": [
            'Microsoft Zira - English (United States)',
            'Microsoft David - English (United States)',
            'Microsoft Zira - English (United States)',
            'Microsoft David - English (United States)'
        ],
        "es": [
            'Microsoft Laura - Spanish (Spain)',
            'Microsoft Pablo - Spanish (Spain)'
        ]
    }

    const voices_RV = {
        "en": [
            "UK English Female",
            "UK English Male",
            "US English Female",
            "US English Male",
            "Australian Female"
        ],
        "es": [
            "Spanish Latin American Female",
            "Spanish Latin American Male",
            "Spanish Peninsular Female",
            "Spanish Peninsular Male"
        ]
    }
    const voices_RV2 = {
        "en": [
            "English (US)",
            "English (UK)",
            "English (Australia)",
            "English (India)"
        ],
        "es": [
            "Español (España)",
            "Español (México)",
            "Español (Argentina)",
            "Español (Colombia)"
        ]
    }
    const en_voice = voices_SSU["en"][0];
    const es_voice = voices_SSU["es"][0];
    const rate = 1;
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