import '../styles/textToSpeech.css'
import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';

class TextToSpeech extends React.Component {
  speak = (text, selected_voice, rate) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name === selected_voice);
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  render() {
    const { data, en_voice, es_voice, rate } = this.props;
    const text = data["present"]
    const meaning = data["meaning"]
    const pronunciation = data["pronunciation"]
    return (
      <div className='tts-container'>
        <div className='tts-sentence'>
          <button className='tts-play' onClick={() => this.speak(text.join(" "), en_voice, rate)}>
            <BsPlayCircle />
          </button>
          <div className='tts_words_list'>
          {text.map(word => (
            <button className='tts-main-word' onClick={() => this.speak(word, en_voice, rate)}>
              {word}
            </button>
          ))}
          </div>
        </div>
        <div className='tts-pronunciation'>
          <button className='tts-word' onClick={() => this.speak(pronunciation, es_voice, rate)}>
            {pronunciation.replace(" ", "")}
          </button>
        </div>
        <div className='tts-meaning'>
          <button className='tts-word' onClick={() => this.speak(meaning.join(", "), es_voice, rate)}>
            {meaning.join(", ")}
          </button>
        </div>
      </div>
    );
  }
}

export default TextToSpeech;