import React, { useState, useEffect } from 'react';
import './Favorite.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // 즐겨찾기 로컬 스토리지에서 불러오기
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // 즐겨찾기 추가
  const handleAddFavorite = () => {
    const url = prompt('Enter the URL of the favorite website:');
    if (url) {
      const newFavorite = { url, favicon: `https://www.google.com/s2/favicons?sz=64&domain=${url}` };
      setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
    }
  };

  // 즐겨찾기 제거
  const handleRemoveFavorite = (index) => {
    setFavorites((prevFavorites) => prevFavorites.filter((_, i) => i !== index));
  };

  // 즐겨찾기 변경 감지하여 로컬 스토리지에 저장
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
        <ul className="favorites-list">
          {favorites.map((favorite, index) => (
            <li key={index} className="favorite-item">
              <a href={favorite.url} target="_blank" rel="noopener noreferrer">
              <img src={favorite.favicon} alt="Favicon" className="favicon" />
              </a>
              <button onClick={() => handleRemoveFavorite(index)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;

