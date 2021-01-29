import React from 'react';
import { ReactComponent as CartIcon } from '../../../../images/icons/cart.svg';
import './style.scss';

export default function Product() {
  return (
    <div className="product">
      <div className="product-wrap">
        <div className="product-img">
          <img src="/images/products/Apples_dmwvrq.jpg" alt="" />
          <span className="product-discount">20%</span>
        </div>
        <div className="product-body">
          <h3 className="product-name">Lime</h3>
          <span className="product-weight">12 pc(s)</span>
          <div className="product-meta">
            <div className="product-price">$1.5</div>
            <button className="add-to-cart">
              <CartIcon />
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
