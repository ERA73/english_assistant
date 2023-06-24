import '../styles/textToSpeech.css'
import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';

class TextToSpeech extends React.Component {
  speak = (text, selected_voice, rate) => {
    console.log(text, selected_voice, rate)
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name === selected_voice);
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  render() {
    const { text, voice, rate } = this.props;
    return (
      <div className='tts-container'>
        <div className='tts-sentence'>
          {text.map(word => (
            <button className='tts-word' onClick={() => this.speak(word, voice, rate)}>
              {word}
            </button>
          ))}
        </div>
        <button onClick={() => this.speak(text.join(" "), voice, rate)}>
          <BsPlayCircle />
        </button>
      </div>
    );
  }
}

export default TextToSpeech;