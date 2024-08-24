import { useEffect, useCallback } from 'react';

function KeyHandler({ bank, playSound }) {
  const handleKeyDown = useCallback((event) => {
    const key = event.key.toUpperCase();
    const pad = bank.find(p => p.keyTrigger === key);

    if (pad) {
      playSound(pad.url, pad.keyTrigger, pad.id);
    }
  }, [bank, playSound]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return null;
}

export default KeyHandler;
