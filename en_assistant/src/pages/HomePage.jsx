import '../styles/home.css'
import TextToSpeech from '../components/TextToSpeech'
import { Link } from 'react-router-dom';

export function HomePage() {

    return (
        <div className='home-container'>
            <h2 className='home-title'>Welcome to English Assistant</h2>
            <div className='home-description'>
                <p className='home-text'>Here, you can study important topics about day-to-day English. You can read and listen to the words by touching them or clicking the play button.</p>
                <div className='home-example'>
                    <TextToSpeech english={"Are you ready?".split(" ")} meaning={["¿Estas listo?"]} en_voice={"Google US English"} es_voice={"Google español"} rate={0.7} />
                </div>
                <p className='home-text'>We hope this content can help you improve your English skills. Enjoy it!</p>
            </div>
            <div className='home-links'>
                <Link className='home-link' to="/phrasalverbs">Phrasal Verbs<span></span></Link>
                <Link className='home-link' to="/auxcontractions">Auxiliary Contractions<span></span></Link>
                <Link className='home-link' to="/infcontractions">Informal Contractions<span></span></Link>
            </div>
        </div>
    )

}
