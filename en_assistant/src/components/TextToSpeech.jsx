import React from 'react';

class TextToSpeech extends React.Component {
  speak = () => {
    const { text } = this.props;
    console.log(text)
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  render() {
    return (
      <button onClick={this.speak}>
        Reproducir
      </button>
    );
  }
}

export default TextToSpeech;