import React, { useState, useEffect } from 'react';
import clock from './Clock.module.css';

const Clock = () => {
  const [meridiem, setMeridiem] = useState('오전');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const currentHours = date.getHours();
      const currentMinutes = String(date.getMinutes()).padStart(2, '0');
      const currentSeconds = String(date.getSeconds()).padStart(2, '0');
      const formattedHours = formatHours(currentHours);
      setMeridiem(formattedHours.meridiem);
      setHours(formattedHours.hours);
      setMinutes(currentMinutes);
      setSeconds(currentSeconds);
      setYear(date.getFullYear());
      setMonth(date.getMonth() + 1); // Month is zero-based, so we add 1
      setDay(date.getDate());
      setDayOfWeek(getDayOfWeek(date.getDay()));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatHours = (hours) => {
    let meridiem = '오전';
    let formattedHours = hours;

    if (hours >= 12) {
      meridiem = '오후';
      formattedHours = hours % 12 || 12;
    }

    return { meridiem, hours: String(formattedHours).padStart(2, '0') };
  };

  const getDayOfWeek = (dayIndex) => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    return daysOfWeek[dayIndex];
  };

  return (
    <div className={clock.clock}>
        <span className={clock.hours}>{hours}</span>
        <span className={clock.colon}>:</span>
        <span className={clock.minutes}>{minutes}</span>
        <div className={clock.flex}>
          <span className={clock.meridiem}>{meridiem}</span>
          <span className={clock.seconds}>{seconds}</span>
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



