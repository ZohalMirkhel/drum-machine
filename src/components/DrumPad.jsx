import React from 'react';

function DrumPad({ pad, playSound }) {
  return (
    <button
      id={pad.id}
      className="drum-pad w-24 h-24 bg-gray-600 rounded shadow-lg flex items-center justify-center text-2xl"
      onClick={() => playSound(pad.url, pad.keyTrigger, pad.id)}
    >
      {pad.keyTrigger}
      <audio
        className="clip"
        id={pad.keyTrigger}
        src={pad.url}
      />
    </button>
  );
}

export default DrumPad;
