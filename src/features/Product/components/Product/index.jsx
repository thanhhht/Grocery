import React from 'react';
import './style.scss';

export default function Product() {
  return (
    <div className="product">
      <div className="product-img"></div>
      <div className="product-body">
        <h3 className="product-name"></h3>
        <span className="product-weight"></span>
        <div className="product-meta">
          <div className="product-price"></div>
          <button className="add-to-cart"></button>
        </div>
      </div>
    </div>
  );
}
