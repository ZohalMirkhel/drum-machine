import React from 'react';
import drumIcon from './drum.png';

function DrumHeader() {
  return (
    <div className="relative w-full p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 opacity-50 rounded-lg"></div>
      <div className="relative flex items-center justify-center">
        <img 
          src={drumIcon} 
          alt="Drum Icon" 
          className="w-12 h-12 mr-2 filter drop-shadow-lg"
        />
        <h1 className="text-3xl font-extrabold text-center text-white drop-shadow-lg">
          Welcome to the Drum Machine
        </h1>
        <img 
          src={drumIcon} 
          alt="Drum Icon" 
          className="w-12 h-12 ml-2 filter drop-shadow-lg"
        />
      </div>
    </div>
  );
}

export default DrumHeader;

