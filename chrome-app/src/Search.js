import React, { useState } from 'react';
import search from './search.module.css';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      return; // 빈 검색어는 처리하지 않음
    }

    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const daumSearchUrl = `https://search.daum.net/search?q=${encodedSearchTerm}`;

    // 새로운 창에서 Daum 검색 결과 페이지로 이동
    window.open(daumSearchUrl, '_blank');
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={search.search_box}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="검색어를 입력하세요"
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default SearchComponent;


