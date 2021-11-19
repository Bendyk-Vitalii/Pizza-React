import styled from "styled-components"
import { MdClose } from 'react-icons/md';
import ReactModal from 'react-modal';

export const LogModal = styled(ReactModal)`
  display: flex;
  width: 60vw;
  height: 80vh;
  margin: 10Vh auto;
  border-radius: 10px;
  background-color: whitesmoke;
  margin-top: 5rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
`

export const Label = styled.label`
  position: relative;
  text-align: center;
  font-size: clamp(1.6rem, 8vw, 3rem);
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 2rem;
`
export const Input = styled.input`
  width: 100%;
  height: 2.375rem;
  font-size: 1rem;
  padding: 0 5%;
  border: 1px solid #e8e8e8;
`

export const ForgotButton = styled.button`
  border: none;
  padding: .5rem 1rem;
  &:hover {
        background: #3c99dc;
        transition: .2s ease-out;
        cursor: pointer;
        color: #000;
    }
`

export const Button = styled.button`
    font-size: 1.4rem;
    padding: .5rem 1rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: .2s ease-out;
    border-radius: 5px;
    &:hover {
        background: #ffc500;
        transition: .2s ease-out;
        cursor: pointer;
        color: #000;
    }
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  font-size: 2rem;
  color: black;
  top: 5rem;
  right: 20vw;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const OpenButton = styled.button`
    position: absolute;
    font-size: 1.4rem;
    left: 2rem;
    top: 1rem;
    border: none;
    background: none;
    color: #fff;
    transition: .2s ease-out;
    border-radius: 5px;
    :hover {
      color: tomato;
      transition: .2s ease-in;
      cursor: pointer;
    }
    
`