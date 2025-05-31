// src/components/VistroLogo.jsx
import React from 'react';

const VistroLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Play button icon */}
      <div className="bg-blue-500 rounded-md p-2 flex items-center justify-center">
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
        </svg>
      </div>

      {/* Brand text */}
      <h1 className="text-2xl font-bold text-black">Vistro</h1>
    </div>
  );
};

export default VistroLogo;
