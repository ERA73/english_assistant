import '../styles/textToSpeech.css'
import React, { useEffect } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
// import { useSpeechSynthesis } from 'react-speech-kit';
// import {require} from 'google-tts-api';
import speech from 'speech-synth';

class TextToSpeech extends React.Component {
  speak_SSU = (text, selected_voice, rate) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name === selected_voice);
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };
  speak_RV = (text, selected_voice, rate) => {
    console.log(speech.getVoiceNames())
    console.log(selected_voice)
    let voice = speech.getVoiceNames()[3];
    speech.say(text, selected_voice)
  };
  
  speak = (text, selected_voice, rate) => {
    this.speak_SSU(text, selected_voice, rate);
  };
  // speak_RV = (text, selected_voice, rate) => {
  //   responsiveVoice.speak(text, selected_voice, {rate:rate});
  // };
  // speak_RV = (text, selected_voice, rate) => {
  //   console.log(text)
  //   console.log(selected_voice)
  //   console.log(rate)
  //   const { speak } = useSpeechSynthesis();
  //   speak({ text, voice: selected_voice, rate });
  // };

  render() {
    const { english, meaning, short="", read="", show="", en_voice, es_voice, rate } = this.props;
    return (
      <div className='tts-container'>
        <div className='tts-sentence'>
          <button className='tts-play' onClick={() => this.speak(english.join(" "), en_voice, rate)}>
            <BsPlayCircle />
          </button>
          <div className='tts_words_list'>
          {english.map(word => (
            <button className='tts-main-word' onClick={() => this.speak(word, en_voice, rate)}>
              {word}
            </button>
          ))}
          </div>
        </div>
        { short !== "" ?(
        <div className='tts-short'>
          <button className='tts-word' onClick={() => this.speak(short, en_voice, rate)}>
            {short.replace(" ", "")}
          </button>
        </div>
        ) : null
        }
        { show !== "" ?(
        <div className='tts-pronunciation'>
          <button className='tts-word' onClick={() => this.speak(read, es_voice, rate)}>
            {show.replace(" ", "")}
          </button>
        </div>
        ) : null
        }
        { meaning !== "" ?(
        <div className='tts-meaning'>
          <button className='tts-word' onClick={() => this.speak(meaning.join(", "), es_voice, rate)}>
            {meaning.join(", ")}
          </button>
        </div>
        ) : null
        }
      </div>
    );
  }
}

export default TextToSpeech;