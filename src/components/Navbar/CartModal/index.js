import React, { useState } from "react";
import ReactModal from "react-modal";
import {
  CartContainer,
  Container,
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
} from "./Cart";
import CloseModalButton from "../LogInModal";

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
        <CloseModalButton onClick={closeModal} />
        <h1>Your shopping cart</h1>
        <CartContainer>
          {cart.line_items.map((product) => (
            <ItemWrapper key={product.id}>
              <h3>{product.name}</h3>
              <CartImg image={product.image.url} alt={product.name} />
              <h4>{product.line_total.formated_with_symbol}</h4>
              <ButtonsQuanity>
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
    <Container>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
