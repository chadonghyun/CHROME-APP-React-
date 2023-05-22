import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{time}</div>;
};

export default Clock;
