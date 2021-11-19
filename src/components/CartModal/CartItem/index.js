import React, { useContext, useState } from "react";
import { CartContext } from "../../../App";
import {
  ItemWrapper,
  ItemLeft,
  ItemRight,
  ButtonPlus,
  ButtonMinus,
  ButtonRemove,
  ButtonsGroup,
  CartContainer,
} from "./CartItem";
import { RemoveFromCart } from '../../../Redux/cart';
import { useDispatch } from 'react-redux';

const CartItem = ( {cart} ) => {
 const dispatch = useDispatch()
  
  const { updateCartQty } =
    useContext(CartContext);

    return ( 
  <CartContainer>
    {cart.line_items.map((product) => (
      <ItemWrapper key={product.id}>
        <ItemLeft>
          <img src={product.image.url} alt={product.name} />
          <h4>{product.name}</h4>
        </ItemLeft>
        <ItemRight>
          <ButtonsGroup>
            <ButtonMinus onClick={() => updateCartQty(product.id, product.quantity - 1)} />
            <h4>{product.quantity}</h4>
            <ButtonPlus onClick={() => updateCartQty(product.id, product.quantity + 1)} />
          </ButtonsGroup>
          <ButtonRemove onClick={() => dispatch(RemoveFromCart(product.id))} />
        </ItemRight>
      </ItemWrapper>
    ))}
  </CartContainer>
    )
};

export default React.memo(CartItem);
