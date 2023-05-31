import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bkimg from './Background.module.css';
import Clock from './Clock';
import Weather from './Weather';
import Favorites from './Favorites';
import Search from './Search';
import SubMenu from './SubMenu/SubMenu';

const API_KEY = '34160554-a2eb623736da59fbc85ad3e5a';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'city'); // 초기값을 로컬 스토리지에서 가져옴

  useEffect(() => {
    const fetchPixabayImages = async () => {
      try {
        const encodedQuery = encodeURIComponent(theme);
        const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodedQuery}`;
        const response = await axios.get(URL);
        const data = response.data;

        if (parseInt(data.totalHits) > 0) {
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          const randomImage = data.hits[randomIndex];
          setImageUrl(randomImage.largeImageURL);
        } else {
          console.log('No hits');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPixabayImages();
  }, [theme]);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme); // 선택한 테마 값을 로컬 스토리지에 저장
  };

  return (
    <div className={bkimg.bkimg} style={{ backgroundImage: `url(${imageUrl})` }}>
      <Favorites />
      <SubMenu theme={theme} handleThemeChange={handleThemeChange} />
      <Clock />
      <Weather />
      <Search />
    </div>
  );
};

export default App;



