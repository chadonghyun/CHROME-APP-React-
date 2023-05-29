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
        // console.log(URL);

        // Pixabay API에서 이미지 가져오기
        const response = await axios.get(URL);
        const data = response.data;

        if (parseInt(data.totalHits) > 0) {
          // 이미지가 있을 경우, 응답에서 무작위 이미지 선택
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          const randomImage = data.hits[randomIndex];
          setImageUrl(randomImage.largeImageURL);
        } else {
          console.log('검색 결과가 없습니다');
        }
      } catch (error) {
        console.log(error);
      }
    };

    // 컴포넌트가 마운트될 때 fetchPixabayImages 함수 호출
    fetchPixabayImages();
  }, []);

  return (
    <div className={bkimg.bkimg} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='bkcate'>
        <ul>
          <li>
            <input type="radio" name='radioTxt' value='nature' checked/>자연
          </li>
          <li>
            <input type="radio" name='radioTxt' value='city' />도시
          </li>
          <li>
            <input type="radio" name='radioTxt' value='flower' />꽃
          </li>
          <li>
            <input type="radio" name='radioTxt' value='galaxy' />우주
          </li>
        </ul>
      </div>
      <div className={clock.clock}>
        < Clock/>
      </div>
    </div>
  );
};

export default App;

