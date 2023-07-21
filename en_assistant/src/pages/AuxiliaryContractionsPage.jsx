import '../styles/auxiliaryContractions.css'
import TextToSpeech from '../components/TextToSpeech'
import data from '../data/auxiliary_contractions.json';

export function AuxiliaryContractionsPage() {

    // data.sort((a, b) => {
    //     return a.present.join(" ").localeCompare(b.present.join(" "))
    // })
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
            "Spanish Female",
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
    const voices_glgl = {
        "en": [
            "Google US English",
            "Google UK English Female",
            "Google UK English Male",
            "Microsoft David Desktop - English (United States)",
            "Microsoft Zira Desktop - English (United States)"
        ],
        "es": [
            "Google español",
            "Google español de Estados Unidos",
            "Microsoft Sabina Desktop - Spanish (Mexico)"
        ]
    }
    const en_voice = voices_glgl["en"][0];
    const es_voice = voices_glgl["es"][0];
    const rate = 0.8;
    return (
        <div className='pv-container'>
            {experiences.map(item => (
                <div>
                    <h1 className='pv-title'>{item["name"].replace("_", " ")}</h1>
                {item["data"].map(data => (
                    <div className='pv-row'>
                        <TextToSpeech english={data["large"]} short={data["short"]} meaning={data["meaning"]} en_voice={en_voice} es_voice={es_voice} rate={rate} />
                    </div>
                ))}
                </div>
            ))}
        </div>
    )

}