import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export const CartLink = styled(FaShoppingCart)`
    font-size: 2rem;
    color: #fff;
    position: relative;
    cursor: pointer;
    margin: 0 auto;
    :hover {
        color: tomato;
      transition: .2s ease-in;
    }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 80%;
  padding: 0 5rem;
  h1 {
  text-align: center;
  font-size: clamp(3rem, 5vw, 5rem);
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  max-height: 25vh;
  margin-top: 2rem;
  justify-content: space-between;
`

export const CartDetails = styled.div`

`

export const CartImg = styled.img`
  object-fit: fill;
  max-height: 20vh;
  min-width: 10vw;
`

export const ButtonEmpty = styled.button`

`

export const  ButtonsQuanity = styled.div`
  
`

export const ButtonPlus = styled.button`
  border: 2px solid tomato;
`

export const ButtonMinus = styled.button`

`

export const ButtonBuy = styled.button`

`

export const ButtonRemove = styled.button`

`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: fixed;
  font-size: 2rem;
  color: black;
  top: 3rem;
  right: 4rem;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
