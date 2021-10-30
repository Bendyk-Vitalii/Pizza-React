import styled from "styled-components"
import { MdClose } from 'react-icons/md';



export const Form = styled.form`
  max-width: 36%;
  min-height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  @media screen and (max-width: 1050px) {
  max-width: 80%;
}
`

export const Label = styled.label`
  position: relative;
  text-align: center;
  font-size: clamp(1.8rem, 10vw, 3.5rem);
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
    //margin: 1vh 0 1vh 0;
    &:hover {
        background: #ffc500;
        transition: .2s ease-out;
        cursor: pointer;
        color: #000;
    }
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  //position: absolute;
  font-size: 2rem;
  color: black;
  top: 20px;
  right: 20px;
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