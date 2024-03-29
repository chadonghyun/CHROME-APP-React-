import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const handleAddFavorite = () => {
    const url = prompt('Enter the URL of the favorite website:');
    if (url) {
      const newFavorite = { url, favicon: `https://www.google.com/s2/favicons?sz=64&domain=${url}` };
      setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
    }
  };

  const handleRemoveFavorite = (index) => {
    setFavorites((prevFavorites) => prevFavorites.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="favorites-container">
      <h2>
        즐겨찾기
        <button onClick={handleAddFavorite}>추가</button>
      </h2>
      {favorites.length === 0 ? (
        <p>즐겨찾기 추가하기</p>
      ) : (
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          navigation={false}
          pagination={false}
          scrollbar={false}
          initialSlide={Math.floor(favorites.length / 2)}
        >
          {favorites.map((favorite, index) => (
            <SwiperSlide key={index} className="favorite-item">
              <a href={favorite.url} target="_blank" rel="noopener noreferrer">
                <img src={favorite.favicon} alt="Favicon" className="favicon" />
              </a>
              <button onClick={() => handleRemoveFavorite(index)}>X</button>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Favorites;
