import React, { useEffect } from 'react';

function KeyHandler({ bank, playSound }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      const pad = bank.find(p => p.keyTrigger === key);

      if (pad) {
        playSound(pad.url, pad.keyTrigger, pad.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [bank, playSound]);

  return null;
}

export default KeyHandler;
