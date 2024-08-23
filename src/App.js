import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import DrumPad from './components/DrumPad';
import './index.css';

const bankOne = [
  { keyCode: 81, keyTrigger: 'Q', id: 'Heater-1', url: '/sounds/Heater-1.mp3' },
  { keyCode: 87, keyTrigger: 'W', id: 'Heater-2', url: '/sounds/Heater-2.mp3' },
  { keyCode: 69, keyTrigger: 'E', id: 'Heater-3', url: '/sounds/Heater-3.mp3' },
  { keyCode: 65, keyTrigger: 'A', id: 'Heater-4', url: '/sounds/Heater-4_1.mp3' },
  { keyCode: 83, keyTrigger: 'S', id: 'Clap', url: '/sounds/Heater-6.mp3' },
  { keyCode: 68, keyTrigger: 'D', id: 'Open-HH', url: '/sounds/Dsc_Oh.mp3' },
  { keyCode: 90, keyTrigger: 'Z', id: "Kick-n'-Hat", url: '/sounds/Kick_n_Hat.mp3' },
  { keyCode: 88, keyTrigger: 'X', id: 'Kick', url: '/sounds/RP4_KICK_1.mp3' },
  { keyCode: 67, keyTrigger: 'C', id: 'Closed-HH', url: '/sounds/Cev_H2.mp3' }
];

function App() {
  const [display, setDisplay] = useState('');

  const playSound = (soundUrl, keyTrigger, clipId) => {
    const sound = new Howl({
      src: [soundUrl],
      volume: 0.5,
    });
    sound.play();

    const audioElement = document.getElementById(keyTrigger);
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }

    setDisplay(clipId);
  };

  const handleKeyPress = (e) => {
    const pad = bankOne.find(pad => pad.keyCode === e.keyCode);
    if (pad) {
      playSound(pad.url, pad.keyTrigger, pad.id);
    }
  };

  useEffect(() => {
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
          <DrumPad
            key={pad.id}
            pad={pad}
            playSound={playSound}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
