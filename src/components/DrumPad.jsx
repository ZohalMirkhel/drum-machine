import React, { useEffect, useState } from 'react';

function DrumPad({ pad, playSound }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        playAudio();
    };

    const handleKeyPress = (event) => {
        if (event.key.toUpperCase() === pad.keyTrigger) {
            playAudio();
        }
    };

    const playAudio = () => {
        const audioElement = document.getElementById(pad.keyTrigger);
        if (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play();
        }
        playSound(pad.url, pad.keyTrigger, pad.id);
        setIsActive(true);
        setTimeout(() => setIsActive(false), 800);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress, pad.keyTrigger]);

    return (
        <button
            id={pad.id}
            className={`drum-pad w-20 h-20 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-22 lg:h-22 rounded flex items-center justify-center text-2xl 
            ${isActive ? 'bg-mint' : 'bg-gray-600'} shadow-lg`}
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
