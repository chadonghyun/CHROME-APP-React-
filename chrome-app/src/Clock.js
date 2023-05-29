import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState('');


  useEffect(() => {
    // 매 500밀리초마다 현재 시간을 업데이트하는 인터벌 설정
    const interval = setInterval(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, '0'); // 시간을 가져와서 두 자리 숫자로 변환
      const minutes = String(date.getMinutes()).padStart(2, '0'); // 분을 가져와서 두 자리 숫자로 변환
      const seconds = String(date.getSeconds()).padStart(2, '0'); // 초를 가져와서 두 자리 숫자로 변환
      setTime(`${hours}:${minutes}:${seconds}`); // 시간을 문자열로 변환하여 상태 업데이트
    }, 500);

    // 컴포넌트가 언마운트될 때 인터벌 정리
    return () => {
      clearInterval(interval);
    };
  }, []);

  // 현재 시간을 표시하는 div 요소 반환
  return <div>{time}</div>;
};

export default Clock;
