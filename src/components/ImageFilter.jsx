import React, { useState } from 'react';
import './ImageFilter.css';

const ImageFilter = () => {
  const [filter, setFilter] = useState('none');
  const ImageSrc ='./Images/Rectangle 1668.jpg'; // Замените на путь к вашему изображению

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="image-filter-container">
      <div className="image-container">
        <img src={ImageSrc} alt="Images" style={{ filter: filter }} />
      </div>
      <div className="filter-options">
        <label>
          None
          <input
            type="radio"
            value="none"
            checked={filter === 'none'}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Grayscale
          <input
            type="radio"
            value="grayscale(100%)"
            checked={filter === 'grayscale(100%)'}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Sepia
          <input
            type="radio"
            value="sepia(100%)"
            checked={filter === 'sepia(100%)'}
            onChange={handleFilterChange}
          />
        </label>
        {/* Добавьте другие фильтры по вашему желанию */}
      </div>
    </div>
  );
};

export default ImageFilter;
