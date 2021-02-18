import React from 'react';
import './style.scss';

export default function FilterBar() {
  return (
    <div className="filter-bar">
      <span className="filter-category">No Category Selected</span>
      <button className="filter">Filter</button>
    </div>
  );
}
