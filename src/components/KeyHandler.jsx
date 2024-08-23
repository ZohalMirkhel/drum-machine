import React, { useEffect } from 'react';

function KeyHandler({ bankOne, playSound }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      const pad = bankOne.find(pad => pad.keyCode === e.keyCode);
      if (pad) {
        playSound(pad.url, pad.keyTrigger, pad.id);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [bankOne, playSound]);

  return null;
}

export default KeyHandler;
