import React from "react";
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
import { RemoveFromCart, UpdateCartQty, AddToCart } from '../../../Redux/cart';
import { useDispatch } from 'react-redux';

const CartItem = ( {cart} ) => {
 const dispatch = useDispatch()

 const removeCart = (item) => {
   dispatch(RemoveFromCart(item))
 }
  const updateQty = (productId, quantity) => {
    dispatch(UpdateCartQty(productId, quantity))
  }

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
            <ButtonMinus onClick={() => product.quantity > 1 ? updateQty(product.id, product.quantity - 1) : removeCart(product.id)} />
            <h4>{product.quantity}</h4>
            <ButtonPlus onClick={() => updateQty(product.id, product.quantity + 1)} />
          </ButtonsGroup>
          <ButtonRemove onClick={() => removeCart(product.id)} />
        </ItemRight>
      </ItemWrapper>
    ))}
  </CartContainer>
    )
};

export default React.memo(CartItem);
