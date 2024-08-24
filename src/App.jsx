import React, { useState, useRef } from 'react';
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
  const [shadowVisible, setShadowVisible] = useState(false);

  const soundRefs = useRef({});

  const playSound = (soundUrl, keyTrigger, clipId) => {
    if (!soundRefs.current[keyTrigger]) {
      soundRefs.current[keyTrigger] = new Howl({
        src: [soundUrl],
        loop: false,
      });
    }

    soundRefs.current[keyTrigger].play();
    setDisplay(clipId);

    setShadowVisible(true);
    setTimeout(() => setShadowVisible(false), 2000);
  };

  const layoutStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div
      id="drum-machine"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white"
      style={{
        border: '4px solid #000',
        padding: '16px',
      }}
    >
      <Display display={display} />
      <div className="relative py-5 px-4 sm:px-0 md:px-16 lg:px-20 shadow-gradient">
        <div
          className={`absolute inset-0 ${shadowVisible ? 'bg-gradient-to-r from-red-500 via-blue-500 to-green-500 opacity-30 filter blur-xl' : 'opacity-0'} transition-opacity duration-1000`}
          style={{ boxShadow: shadowVisible ? '0px 0px 40px 20px rgba(0,0,0,0.5)' : 'none' }}
        />
        <div className="relative z-10" style={layoutStyles}>
          <ButtonPanel playSound={playSound} />
        </div>
      </div>
      <KeyHandler bank={bankOne} playSound={playSound} />
    </div>
  );
}

export default App;
