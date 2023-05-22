import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bkimg from './Background.module.css';
import Clock from './Clock';
import clock from './Clock.module.css';


const API_KEY = '34160554-a2eb623736da59fbc85ad3e5a';
const searchQuery = 'nature';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchPixabayImages = async () => {
      try {
        const encodedQuery = encodeURIComponent(searchQuery);
        const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodedQuery}`;
        console.log(URL);

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
  }, []);

  return (
    <div className={bkimg.bkimg} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={clock.clock}>
        < Clock/>
      </div>
    </div>
  );
};

export default App;

