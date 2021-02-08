import React, { useState } from 'react';
import { ReactComponent as PlusIcon } from '../../../../images/icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../../../images/icons/minus.svg';

import './style.scss';

export default function Counter({increaseQuantity, decreaseQuantity, quantity}) {
  
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
