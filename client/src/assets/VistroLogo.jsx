// src/components/VistroLogo.jsx
import React from 'react';
import lightThemeLogo from './logos/vistro_light_bg_logo.png'

const VistroLogo = () => {
  return (
    <div>
        <img src={lightThemeLogo} alt="" width={100} height={40}/>
    </div>
  );
};

export default VistroLogo;
