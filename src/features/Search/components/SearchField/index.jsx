import React from 'react';
import './style.scss';

export default function SearchField() {
  return (
    <input
      type="search"
      name="search"
      className="search-field"
      placeholder="Search your products from here"
    />
  );
}
