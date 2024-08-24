import React from 'react';

function Display({ display }) {
  return (
    <div id="display" className="mb-8 text-xl">
      {display || "Play a sound!"}
    </div>
  );
}

export default Display;
