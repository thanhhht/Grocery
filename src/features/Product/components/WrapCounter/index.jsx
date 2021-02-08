import React, {useState} from 'react';
import Counter from '../Counter';
import { ReactComponent as CartIcon } from '../../../../images/icons/cart.svg';

export default function WrapCounter() {
  const [quantity, setQuantity] = useState(1);
  const [isPick, setIsPick] = useState(false);
  function increaseQuantity() {
    const numb = quantity + 1;
    setQuantity(numb); 
  }
  function decreaseQuantity() {
    const numb = (quantity) ? quantity - 1 : 0;
    numb ? setQuantity(numb) : setIsPick(false);
  }
  function showCounter() {
    setIsPick(true);
  }
  return (
    <>
      {isPick ?
        <Counter 
          quantity = {quantity}
          increaseQuantity = {increaseQuantity}
          decreaseQuantity = {decreaseQuantity}
        /> :
        <button className="add-to-cart" onClick={() => showCounter()}>
          <CartIcon />
          <span>Cart</span>
        </button>
      }
    </>
  );
}
