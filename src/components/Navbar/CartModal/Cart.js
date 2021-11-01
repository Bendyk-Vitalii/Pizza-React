import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const CartLink = styled(FaShoppingCart)`
    font-size: 2rem;
    color: #fff;
    position: relative;
    top: 1rem;
    cursor: pointer;
    :hover {
        color: tomato;
      transition: .2s ease-in;
    }
`;

export const Total = styled.span`
    font-size: 9rem;
    background-color: red;
    border-radius: 50%;
`
export const Container = styled.div`
  padding: 0 1rem;
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
`

export const CartContainer = styled.div`

`

export const ItemWrapper = styled.div`

`

export const CartDetails = styled.div`

`

export const CartImg = styled.img`

`

export const ButtonEmpty = styled.button`

`

export const  ButtonsQuanity = styled.button`

`

export const ButtonPlus = styled.button`

`

export const ButtonMinus = styled.button`

`

export const ButtonBuy = styled.button`

`

export const ButtonRemove = styled.button`

`

