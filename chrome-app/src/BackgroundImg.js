import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bkimg from "./Background.module.css";

const API_KEY = '34160554-a2eb623736da59fbc85ad3e5a';
const API_URL = 'https://api.pexels.com/v1/search?query=nature&per_page=1&page=1';

const RandomNatureImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomNatureImage = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: API_KEY
          }
        });
        const imageUrl = response.data.photos[0].src.original;
        setImageUrl(imageUrl);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRandomNatureImage();
  }, []);

  return (
    <div className={bkimg.bkimg}>
      {imageUrl && <img src={imageUrl} alt="Random Nature" />}
    </div>
  );
};

export default RandomNatureImage;


