import React, { useEffect } from 'react';

function KeyHandler({ playSound }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      const pad = bankOne.find(pad => pad.keyCode === e.keyCode);
      if (pad) {
        playSound(pad.url, pad.keyTrigger, pad.id);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [playSound]);

  return null;
}

export default KeyHandler;
