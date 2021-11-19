import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import ReactModal from 'react-modal';

export const CartModal = styled(ReactModal)`
background-color: whitesmoke;
height: 85%;
margin: 2rem auto;
border: none;
border-radius: 10px;
text-align: center;
padding-top: 10vh;
margin-top: 5rem;
overflow: scroll;
`

export const CartContainer = styled.div`
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50vw 30vw;
  justify-content: center;
  grid-gap: 40px;
  padding-top: 30px;
  border-radius: 10px;
  background-color: white;
  h1 {
  text-align: center;
  font-size: clamp(3rem, 5vw, 5rem);
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
  justify-content: space-evenly;
  padding: 10px;
  height: 50vh;
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

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: fixed;
  font-size: 2rem;
  color: black;
  top: 6rem;
  right: 4rem;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 22;
`;
