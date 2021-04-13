import React from 'react';
import Product from '../Product';
import './style.scss';

export default function ProductList({ productList }) {
  return (
    <div className="product-list">
      {productList.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}
