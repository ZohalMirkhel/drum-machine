import React, { useState } from 'react';

function DrumPad({ pad, playSound }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        playSound(pad.url, pad.keyTrigger, pad.id);
        setIsActive(true);
        setTimeout(() => setIsActive(false), 600);
    };

    return (
        <button
            id={pad.id}
            className={`drum-pad w-10 h-20 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-22 lg:h-22 rounded flex items-center justify-center text-2xl 
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
