import React from 'react';
import {ReactComponent as PlusIcon} from "../../../../images/icons/plus.svg";
import {ReactComponent as MinusIcon} from "../../../../images/icons/minus.svg";

import './style.scss';

export default function Counter() {
  return (
    <div className="counter">
      <button><MinusIcon/></button>
      <span className="counter-value">1</span>
      <button><PlusIcon/></button>
    </div>
  );
}
