import React from 'react';
import Bktheme from './Bktheme';
import SMenu from './SubMenu.module.css';

function SubMenu({ theme, handleThemeChange }) {
  return (
    <div className={SMenu.SubMenu}>
      <Bktheme theme={theme} handleThemeChange={handleThemeChange} />
    </div>
  );
}

export default SubMenu;
