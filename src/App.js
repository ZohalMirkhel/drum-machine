import React, { useState } from 'react';
import { Howl } from 'howler';
import './index.css';

const bankOne = [
  { keyCode: 81, keyTrigger: 'Q', id: 'Heater-1', url: '/sounds/Heater-1.mp3' },
  { keyCode: 87, keyTrigger: 'W', id: 'Heater-2', url: '/sounds/Heater-2.mp3' },
  { keyCode: 69, keyTrigger: 'E', id: 'Heater-3', url: '/sounds/Heater-3.mp3' },
  { keyCode: 65, keyTrigger: 'A', id: 'Heater-4', url: '/sounds/Heater-4.mp3' },
  { keyCode: 83, keyTrigger: 'S', id: 'Clap', url: '/sounds/Clap.mp3' },
  { keyCode: 68, keyTrigger: 'D', id: 'Open-HH', url: '/sounds/Open-HH.mp3' },
  { keyCode: 90, keyTrigger: 'Z', id: "Kick-n'-Hat", url: '/sounds/Kick-n-Hat.mp3' },
  { keyCode: 88, keyTrigger: 'X', id: 'Kick', url: '/sounds/Kick.mp3' },
  { keyCode: 67, keyTrigger: 'C', id: 'Closed-HH', url: '/sounds/Closed-HH.mp3' }
];

function App() {
  const [display, setDisplay] = useState('');

  const playSound = (soundUrl, clipId) => {
    const sound = new Howl({ src: [soundUrl] });
    sound.play();
    setDisplay(clipId);
  };

  const handleKeyPress = (e) => {
    const pad = bankOne.find(pad => pad.keyCode === e.keyCode);
    if (pad) {
      playSound(pad.url, pad.id);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div id="drum-machine" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div id="display" className="mb-8 text-xl">
        {display || "Play a sound!"}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {bankOne.map(pad => (
          <button
            key={pad.id}
            id={pad.id}
            className="drum-pad w-24 h-24 bg-gray-600 rounded shadow-lg flex items-center justify-center text-2xl"
            onClick={() => playSound(pad.url, pad.id)}
          >
            {pad.keyTrigger}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
