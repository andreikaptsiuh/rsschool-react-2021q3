import React from 'react';

export const SearchBar: React.FC = () => (
  <div className="search-bar__container">
    <div className="search-bar__icon" />
    <input className="search-bar" type="text" placeholder="Search" />
  </div>
);
