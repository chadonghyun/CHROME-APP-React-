import React, { useState, useEffect } from 'react';
import clock from './Clock.module.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  const meridiem = hours >= 12 ? '오후' : '오전';
  const formattedHours = hours % 12 || 12;
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const dayOfWeek = getDayOfWeek(time.getDay());

  function getDayOfWeek(dayIndex) {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    return daysOfWeek[dayIndex];
  }

  return (
    <div className={clock.clock}>
      <div className={clock.digitalClock}>
        <span className={clock.hours}>{formattedHours}</span>
        <span className={clock.colon}>:</span>
        <span className={clock.minutes}>{minutes}</span>
        <div className={clock.flex}>
          <span className={clock.meridiem}>{meridiem}</span>
          <span className={clock.seconds}>{seconds}</span>
        </div>
      </div>
      <div className={clock.date}>
        <span>{year}년</span>
        <span>{month}월</span>
        <span>{day}일</span>
        <span>{dayOfWeek}요일</span>
      </div>
    </div>
  );
};

export default Clock;




