import React, { useState } from 'react';
import { Howl } from 'howler';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import KeyHandler from './components/KeyHandler';

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

  return (
    <div id="drum-machine" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <Display display={display} />
      <ButtonPanel bankOne={bankOne} playSound={playSound} />
      <KeyHandler bankOne={bankOne} playSound={playSound} />
    </div>
  );
}

export default App;