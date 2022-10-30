import React from "react";
import "./App.css"

const firstSounds = [
  {
    keyCode: 81,
    key: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    key: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    key: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    key: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    key: "D",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 88,
    key: "X",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    keyCode: 67,
    key: "C",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
];


const KeyboardKey = ({ play, sound: { id, keyCode, key, url } }) => {
  const handleKeyboard = (e) => {
    if (e.keyCode === keyCode) {
      play(key);
    }
  };

  const myFunction = () => {
    play(key);
    document.getElementById("display").innerHTML = id;
  };
  

  React.useEffect(
    () => document.addEventListener("keydown", handleKeyboard),
    []
  );

  return (
    <button
      className="drum-pad"
      id={id}
      key={key}
      onClick={() => myFunction()}
    >
      <audio className="clip" src={url} id={key} />
      {key}
    </button>
  );
};

const Keyboard = ({ play }) => {
  return firstSounds.map((sound) => <KeyboardKey play={play} sound={sound} />);
};

const App = () => {
  const play = (key) => {
    const sound = document.getElementById(key);
    sound.currentTime = 0;
    sound.play();
  };

  return (
    <>
    <div className="main-container">
      <div id="drum-machine">
        <div id="display"></div>
        <div className="buttons">
        <Keyboard play={play} />
        </div>
      </div>
    </div>
    </>
  );
};

export default App;