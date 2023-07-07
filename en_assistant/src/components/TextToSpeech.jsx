import '../styles/textToSpeech.css'
import React, { useEffect } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
// import { useSpeechSynthesis } from 'react-speech-kit';

class TextToSpeech extends React.Component {
  speak_SSU = (text, selected_voice, rate) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name === selected_voice);
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  // speak_RV = (text, selected_voice, rate) => {
  //   console.log(text)
  //   console.log(selected_voice)
  //   console.log(rate)
  //   const { speak } = useSpeechSynthesis();
  //   speak({ text, voice: selected_voice, rate });
  // };

  render() {
    const { data, en_voice, es_voice, rate } = this.props;
    const text = data["present"]
    const meaning = data["meaning"]
    const read = data["pronunciation"]["read"]
    const show = data["pronunciation"]["show"]
    return (
      <div className='tts-container'>
        <div className='tts-sentence'>
          <button className='tts-play' onClick={() => this.speak_SSU(text.join(" "), en_voice, rate)}>
            <BsPlayCircle />
          </button>
          <div className='tts_words_list'>
          {text.map(word => (
            <button className='tts-main-word' onClick={() => this.speak_SSU(word, en_voice, rate)}>
              {word}
            </button>
          ))}
          </div>
        </div>
        <div className='tts-pronunciation'>
          <button className='tts-word' onClick={() => this.speak_SSU(read, es_voice, rate)}>
            {show.replace(" ", "")}
          </button>
        </div>
        <div className='tts-meaning'>
          <button className='tts-word' onClick={() => this.speak_SSU(meaning.join(", "), es_voice, rate)}>
            {meaning.join(", ")}
          </button>
        </div>
      </div>
    );
  }
}

export default TextToSpeech;