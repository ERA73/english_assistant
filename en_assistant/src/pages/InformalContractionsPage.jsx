import '../styles/informalContractions.css'
import TextToSpeech from '../components/TextToSpeech'
import data from '../data/informal_contractions.json';

export function InformalContractionsPage() {

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
    const rate = 0.7;
    return (
        <div className='icontractoins-container'>
            {experiences.map(data => (
                <div className='icontractoins-row'>
                    <TextToSpeech english={data["large"].split(" ")} short={data["short"]} meaning={data["meaning"].split("|")} en_voice={en_voice} es_voice={es_voice} rate={rate} />
                </div>
            ))}
        </div>
    )

}