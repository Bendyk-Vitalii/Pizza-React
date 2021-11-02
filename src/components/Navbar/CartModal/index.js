import React, { useState } from "react";
import ReactModal from "react-modal";
import {
  CartContainer,

  ItemWrapper,
  CartDetails,
  CartImg,
  ButtonEmpty,
  ButtonBuy,
  ButtonsQuanity,
  ButtonPlus,
  ButtonMinus,
  ButtonRemove,
  CartLink,
  CloseModalButton 
} from "./Cart";

ReactModal.setAppElement("#root");

const Cart = ({ cart, totalItems }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("open");
  }

  function closeModal() {
    setIsOpen(false);
  }
  const EmptyCart = () => (
    <div>You have no items in your shopping art, start adding some! </div>
  );

  const FilledCart = () => (
    <>
      <CartLink onClick={openModal}></CartLink>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <CloseModalButton onClick={closeModal}/>
        <CartContainer>
        <h1>Your shopping cart</h1>
          {cart.line_items.map((product) => (
            <ItemWrapper key={product.id}>
              <CartImg src={product.image.url} alt={product.name} />
              <h3>{product.name}</h3>
              <ButtonsQuanity>
              <h4>{product.line_total.formated_with_symbol}</h4>
                <ButtonPlus>+</ButtonPlus>
                <ButtonMinus>-</ButtonMinus>
              </ButtonsQuanity>
              <ButtonRemove>Remove</ButtonRemove>
            </ItemWrapper>
          ))}
        </CartContainer>
        <CartDetails>
          <h4>Subtotal: {cart.total_items}</h4>
        </CartDetails>
        <ButtonEmpty>Empty Cart</ButtonEmpty>
        <ButtonBuy>Checkout</ButtonBuy>
      </ReactModal>
    </>
  );
  if (!cart.line_items) return "Loading...";
  return (
    <CartContainer>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </CartContainer>
  );
};

export default Cart;
