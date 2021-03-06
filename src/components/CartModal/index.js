import React, { useState } from "react"
import ReactModal from "react-modal"
import {
  CartModal,
  CartDetails,
  Container,
  ButtonEmpty,
  ButtonBuy,
  CartLink,
  CloseModalButton,
  CartContainer,
} from "./Cart"
import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"
import { EmptyCartHandler } from "../../Redux/cart"
ReactModal.setAppElement("#root")

const Cart = () => {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleEmptyCart = () => {
    dispatch(EmptyCartHandler())
  }

  const [modalIsOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const showModal = () => setIsOpen(true)

  const EmptyCart = () => (
    <>
      <CartLink onClick={showModal} total={cart.total_items} />
      <CartModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CloseModalButton onClick={closeModal} />
        <div>You have no items in your shopping art, start adding some! </div>
      </CartModal>
    </>
  )

  const FilledCart = () => (
    <>
      <CartLink onClick={showModal} />
      <CartModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CloseModalButton onClick={closeModal} />
        <h1>Your shopping cart</h1>
        <Container>
          <CartItem cart={cart} />
          <CartDetails>
            <h4>Subtotal: {cart.subtotal.formatted_with_code}</h4>
            <ButtonEmpty onClick={handleEmptyCart}>Remove</ButtonEmpty>
            <ButtonBuy>Checkout</ButtonBuy>
          </CartDetails>
        </Container>
      </CartModal>
    </>
  )
  if (!cart.line_items)
    return <CartLink onClick={showModal} total={cart.total_items} />
  return (
    <CartContainer>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </CartContainer>
  )
}

export default React.memo(Cart)
