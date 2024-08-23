import React from 'react';
import DrumPad from './DrumPad';

const bankOne = [
  { keyCode: 81, keyTrigger: 'Q', id: 'Heater-1', url: '/sounds/Heater-1.mp3', shadow: '0 2px 12px rgba(255, 0, 0, 0.8), 0 2px 6px rgba(255, 0, 0, 0.5)' },
  { keyCode: 87, keyTrigger: 'W', id: 'Heater-2', url: '/sounds/Heater-2.mp3', shadow: '0 2px 12px rgba(0, 0, 255, 0.8), 0 2px 6px rgba(0, 0, 255, 0.5)' },
  { keyCode: 69, keyTrigger: 'E', id: 'Heater-3', url: '/sounds/Heater-3.mp3', shadow: '0 2px 12px rgba(0, 255, 0, 0.8), 0 2px 6px rgba(0, 255, 0, 0.5)' },
  { keyCode: 65, keyTrigger: 'A', id: 'Heater-4', url: '/sounds/Heater-4_1.mp3', shadow: '0 2px 12px rgba(255, 255, 0, 0.8), 0 2px 6px rgba(255, 255, 0, 0.5)' },
  { keyCode: 83, keyTrigger: 'S', id: 'Clap', url: '/sounds/Heater-6.mp3', shadow: '0 2px 12px rgba(255, 20, 147, 0.8), 0 2px 6px rgba(255, 20, 147, 0.5)' },
  { keyCode: 68, keyTrigger: 'D', id: 'Open-HH', url: '/sounds/Dsc_Oh.mp3', shadow: '0 2px 12px rgba(0, 128, 128, 0.8), 0 2px 6px rgba(0, 128, 128, 0.5)' },
  { keyCode: 90, keyTrigger: 'Z', id: "Kick-n'-Hat", url: '/sounds/Kick_n_Hat.mp3', shadow: '0 2px 12px rgba(128, 0, 128, 0.8), 0 2px 6px rgba(128, 0, 128, 0.5)' },
  { keyCode: 88, keyTrigger: 'X', id: 'Kick', url: '/sounds/RP4_KICK_1.mp3', shadow: '0 2px 12px rgba(75, 0, 130, 0.8), 0 2px 6px rgba(75, 0, 130, 0.5)' },
  { keyCode: 67, keyTrigger: 'C', id: 'Closed-HH', url: '/sounds/Cev_H2.mp3', shadow: '0 2px 12px rgba(128, 128, 128, 0.8), 0 2px 6px rgba(128, 128, 128, 0.5)' }
];

function ButtonPanel({ playSound }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {bankOne.map(pad => (
        <DrumPad
          key={pad.id}
          pad={pad}
          playSound={playSound}
        />
      ))}
    </div>
  );
}

export default ButtonPanel;
