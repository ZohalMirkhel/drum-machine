import React from 'react';

function DrumPad({ pad, playSound }) {
    const handleClick = () => {
      playSound(pad.url, pad.keyTrigger, pad.id);
    };

  return (
    <button
      id={pad.id}
      className="drum-pad w-24 h-24 rounded flex items-center justify-center text-2xl bg-gray-600 shadow-lg"
      style={{ boxShadow: pad.shadow }}
      onClick={handleClick}
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
