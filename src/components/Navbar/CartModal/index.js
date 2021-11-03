import React, { useState } from "react";
import ReactModal from "react-modal";
import {
  CartContainer,
  ItemWrapper,
  CartDetails,
  Container,
  ButtonEmpty,
  ButtonBuy,
  ItemLeft,
  ItemRight,
  ButtonPlus,
  ButtonMinus,
  ButtonRemove,
  CartLink,
  CloseModalButton,
  ButtonsGroup
} from "./Cart";

ReactModal.setAppElement("#root");

const Cart = ({ cart, totalItems }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  console.dir(cart)
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const EmptyCart = () => (
    <div>You have no items in your shopping art, start adding some! </div>
  );

  const FilledCart = () => (
    
    <>
      <CartLink onClick={openModal} total={cart.total_items} />
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CloseModalButton onClick={closeModal} />
        <h1>Your shopping cart</h1>
        <Container>
          <CartContainer>
            {cart.line_items.map((product, index) => ( 
              
              <ItemWrapper key={product.id}>
                <ItemLeft>
                <img src={product.image.url} alt={product.name} />
                <h4>{product.name}</h4>
                </ItemLeft>
                <ItemRight>
                  <ButtonsGroup>
                  <ButtonMinus />
                  <h4>{product.quantity}</h4>
                  <ButtonPlus />
                  </ButtonsGroup>
                <ButtonRemove />
                </ItemRight>
              </ItemWrapper>
            ))}
          </CartContainer>
          <CartDetails>
            <h4>Subtotal: {cart.subtotal.formatted_with_code}</h4>
            <ButtonEmpty>Remove</ButtonEmpty>
            <ButtonBuy>Checkout</ButtonBuy>
          </CartDetails>
        </Container>
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
