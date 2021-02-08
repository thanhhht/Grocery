import React from 'react';
import WrapCounter from '../WrapCounter';
import './style.scss';

export default function Product() {
  return (
    <div className="product">
      <div className="product__wrap">
        <div className="product__img">
          <img src="/images/products/Apples_dmwvrq.jpg" alt="" />
          <span className="product__discount">20%</span>
        </div>
        <div className="product__body">
          <h3 className="product__name">Lime</h3>
          <span className="product__weight">12 kg</span>
          <div className="product__meta">
            <div className="product__price-wrapper">
              <strike className="product__price--discounted">$2</strike>
              <div className="product__price">$1.5</div>
            </div>
            <WrapCounter/>
          </div>
        </div>
      </div>
    </div>
  );
}
