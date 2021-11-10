import React, { useContext } from "react";
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

const CartItem = () => {
  const { updateCartQty, RemoveFromCart, cart } =
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
            <ButtonMinus onClick={() =>RemoveFromCart(product.id)} />
            <h4>{product.quantity}</h4>
            <ButtonPlus onClick={() => updateCartQty(product.id, product.quantity + 1)} />
          </ButtonsGroup>
          <ButtonRemove onClick={() => RemoveFromCart(product.id)} />
        </ItemRight>
      </ItemWrapper>
    ))}
  </CartContainer>
    )
};

export default React.memo(CartItem);
