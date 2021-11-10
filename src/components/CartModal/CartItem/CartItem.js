import styled from 'styled-components';
import {  FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';

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