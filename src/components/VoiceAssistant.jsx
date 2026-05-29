import "./VoiceAssistant.css";

import {

  FaMicrophone,
  FaVolumeUp,

} from "react-icons/fa";

function VoiceAssistant({

  setVoiceDestination,

}) {

  /* SPEAK */

  const speak = (text) => {

    const speech =

      new SpeechSynthesisUtterance(
        text
      );

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1;

    window.speechSynthesis.speak(
      speech
    );

  };

  /* START VOICE */

  const startVoice = () => {

    const SpeechRecognition =

      window.SpeechRecognition ||

      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert(
        "Speech Recognition not supported"
      );

      return;

    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    /* AI SPEAKS */

    speak(
      "Listening for destination"
    );

    recognition.onresult = (event) => {

      const transcript =

        event.results[0][0]
        .transcript;

      /* CLEAN COMMAND */

      let cleanedText =

        transcript
          .replace("navigate to", "")
          .replace("show route to", "")
          .replace("go to", "")
          .trim();

      setVoiceDestination(
        cleanedText
      );

      /* AI RESPONSE */

      speak(

        `Generating optimized route to ${cleanedText}`

      );

      /* AUTO ROUTE */

      setTimeout(() => {

        const button =

          document.querySelector(
            ".search-bar button"
          );

        if (button) {

          button.click();

        }

      }, 700);

    };

  };

  return (

    <div

      className="voice-card"

      onClick={startVoice}

    >

      <div className="voice-left">

        <FaMicrophone className="voice-icon" />

        <div>

          <h2>
            Voice Assistant
          </h2>

          <p>

            Speak destination for
            AI navigation

          </p>

        </div>

      </div>

      {/* AI SPEAK */}

      <FaVolumeUp className="speak-icon" />

    </div>

  );

}

export default VoiceAssistant;