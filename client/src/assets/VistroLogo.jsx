// src/components/VistroLogo.jsx
import React from 'react';
import lightThemeLogo from './logos/vistro_light_bg_logo.png';

const VistroLogo = ({ width = 100, height = 'auto', className = '' }) => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <img
        src={lightThemeLogo}
        alt="Vistro Logo"
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};

export default VistroLogo;
