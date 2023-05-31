import React from 'react';
import bkimg from './Bktheme.module.css';

const Bktheme = ({ theme, handleThemeChange }) => {
  return (
    <div className={bkimg.bkcate}>
      <ul>
        <li>
          <input
            type="radio"
            name='radioTxt'
            value='nature'
            checked={theme === 'nature'}
            onChange={handleThemeChange}
          />
          자연
        </li>
        <li>
          <input
            type="radio"
            name='radioTxt'
            value='city'
            checked={theme === 'city'}
            onChange={handleThemeChange}
          />
          도시
        </li>
        <li>
          <input
            type="radio"
            name='radioTxt'
            value='flower'
            checked={theme === 'flower'}
            onChange={handleThemeChange}
          />
          꽃
        </li>
        <li>
          <input
            type="radio"
            name='radioTxt'
            value='galaxy'
            checked={theme === 'galaxy'}
            onChange={handleThemeChange}
          />
          우주
        </li>
      </ul>
    </div>
  );
};

export default Bktheme;
