import React, { useEffect, useState } from 'react';
import axios from 'axios';
import weather from './Weather.module.css';

const API_KEY = '87a88927cf765d0b901a963b77472ef4';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const { coords } = await getCurrentLocation();
        const { latitude, longitude } = coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, []);

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getWeatherIcon = () => {
    if (weatherData) {
      const weatherMain = weatherData.weather[0].main;
      return `${weatherMain}.png`;
    }
    return null;
  };

  const cityMappings = {
    Seoul: '서울', Incheon: '인천', Deagu: '대구', Deajeon: '대전', Jeju: '제주', Busan: '부산', Yeosu: '여수', Suncheon: '순천', Dokdo: '독도', Ulleungdo: '울릉도', Chuncheon: '춘천',
  };

  const getKoreanCityName = (city) => {
    return cityMappings[city] || city;
  };

  return (
    <div>
      {weatherData ? (
        <div className={weather.weather}>
          <a href="https://weather.naver.com/today" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/${getWeatherIcon()}`} alt="Weather Icon" />
            <span>{weatherData.main.temp}°C</span>
            <span>{getKoreanCityName(weatherData.name)}</span>
          </a>
        </div>
      ) : (
        <div>Loading weather data...</div>
      )}
    </div>
  );
};

export default Weather;

