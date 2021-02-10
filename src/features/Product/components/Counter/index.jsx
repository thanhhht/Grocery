import React from 'react';
import { ReactComponent as MinusIcon } from '../../../../images/icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../../images/icons/plus.svg';
import './style.scss';

export default function Counter({ increaseQuantity, decreaseQuantity, quantity }) {
  return (
    <div className="counter">
      <button onClick={() => decreaseQuantity()}>
        <MinusIcon />
      </button>
      <span className="counter-value">{quantity}</span>
      <button onClick={() => increaseQuantity()}>
        <PlusIcon />
      </button>
    </div>
  );
}
