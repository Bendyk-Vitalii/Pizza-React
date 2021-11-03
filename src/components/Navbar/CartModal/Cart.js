import styled from 'styled-components';
import { FaShoppingCart, FaCircle, FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  grid-gap: 40px;
  margin-top: 30px;
  h1 {
  text-align: center;
  font-size: clamp(3rem, 5vw, 5rem);
  }
`
export const CartContainer = styled.div`
  
`

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 8px 8px 16px hsl(236deg 6% 49% / 15%);
  margin-bottom: 24px;
  min-height: 20vh;
  img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 8px;
    position: static;
    margin-right: 30;
  }
`

export const CartLink = styled(FaShoppingCart)`
    display: block;
    font-size: 2rem;
    color: #fff;
    position: relative;
    cursor: pointer;
    margin: 1rem auto;
    :hover {
        color: tomato;
      transition: .2s ease-in;
    }
`;


export const CartDetails = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 50%;
  box-shadow: 8px 8px 16px hsl(236deg 6% 49% / 15%);
  @media(max-width: 1000px) {
    flex-direction: column;
  }
`

export const ButtonEmpty = styled.button`
  background: whitesmoke;
  color: grey;
  margin: 10px;
  border: 1px solid grey;
  font-size: clamp(.8rem, 7vw, 1.8rem);
  padding: clamp(.4rem, 4vw, .8rem);
  border-radius: .8rem;
  transition: all .3s ease;
  cursor: pointer;
  :hover {
    box-shadow:  3px 5px grey;
  }
`

export const ButtonBuy = styled.button`
  background: tomato;
  color: white;
  margin: 10px;
  border: 1px solid tomato;
  font-size: clamp(.8rem, 7vw, 1.8rem);
  padding: clamp(.4rem, 4vw, .8rem);
  border-radius: .8rem;
  transition: all .3s ease;
  cursor: pointer;
  :hover {
    box-shadow:  3px 5px #e9ba23;
  }
`

export const ButtonsGroup = styled.div`
    width: 108px;
    height: 48px;
    padding: 0;
    border: 1px solid #d4d7db;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .3rem;
`

export const  ItemLeft = styled.div`

`
export const  ItemRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  @media (max-width: 991px) {
    min-width: 260px;
  }
`


export const ButtonPlus = styled(FaPlus)`
  font-size: 1rem;
  cursor: pointer;
`

export const ButtonMinus = styled(FaMinus)`
  font-size: 1rem;
  cursor: pointer;
`

export const ButtonRemove = styled(FaTrashAlt)`
  font-size: 2rem;
  margin-right: 1rem;
  cursor: pointer;
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
