import React from 'react';
import WrapCounter from '../WrapCounter';
import './style.scss';

export default function Product({ product }) {
  return (
    <div className="product">
      <div className="product__wrap">
        <div className="product__img">
          <img src={product.image} alt="" />
          {product.discountInPercent > 0 && (
            <span className="product__discount">{product.discountInPercent}%</span>
          )}
        </div>
        <div className="product__body">
          <h3 className="product__name">{product.title}</h3>
          <span className="product__weight">{product.unit}</span>
          <div className="product__meta">
            <div className="product__price-wrapper">
              <strike className="product__price--discounted">${product.price}</strike>
              <div className="product__price">${product.salePrice}</div>
            </div>
            <WrapCounter />
          </div>
        </div>
      </div>
    </div>
  );
}
