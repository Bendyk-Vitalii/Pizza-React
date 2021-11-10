import React, { useState, useContext } from "react";
import ReactModal from "react-modal";
import { CartContext } from "../../App";
import {
  CartContainer,
  CartDetails,
  Container,
  ButtonEmpty,
  ButtonBuy,
  CartLink,
  CloseModalButton,
} from "./Cart";
import CartItem from "./CartItem";

ReactModal.setAppElement("#root");

const Cart = () => {
  const { handleEmptyCart, cart} = useContext(CartContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const EmptyCart = () => (
    <>
      <CartLink onClick={openModal} total={cart.total_items} />
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CloseModalButton onClick={closeModal} />
        <div>You have no items in your shopping art, start adding some! </div>
      </ReactModal>
    </>
  );

  const FilledCart = () => (
    <>
      <CartLink onClick={openModal} />
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CloseModalButton onClick={closeModal} />
        <h1>Your shopping cart</h1>
        <Container>
          <CartItem /> 
          <CartDetails>
            <h4>Subtotal: {cart.subtotal.formatted_with_code}</h4>
            <ButtonEmpty onClick={handleEmptyCart}>Remove</ButtonEmpty>
            <ButtonBuy>Checkout</ButtonBuy>
          </CartDetails>
        </Container>
      </ReactModal>
    </>
  );
  if (!cart.line_items) return <CartLink onClick={openModal} total={cart.total_items} />;
  return (
    <CartContainer>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </CartContainer>
  );
};

export default Cart;
